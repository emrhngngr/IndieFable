import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Game from '@/models/Game';

export async function GET(req: Request) {
  try {
    // Connect to MongoDB
    await connectDB();

    const url = new URL(req.url);
    const sortBy = url.searchParams.get('sort') || 'createdAt';
    const order = url.searchParams.get('order') === 'asc' ? 1 : -1;
    const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10));
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit') || '20', 10)));

    const skip = (page - 1) * limit;

    // Build sort object dynamically but only allow safe fields
    const allowedSortFields: Record<string, 1 | -1> = {
      createdAt: order,
      title: order,
      isFree: order,
    };

    const sortObj: Record<string, 1 | -1> = allowedSortFields[sortBy]
      ? { [sortBy]: order }
      : { createdAt: -1 };

    const [games, total] = await Promise.all([
      // casting sortObj here to satisfy mongoose typing in this file
      Game.find({}).sort(sortObj as any).skip(skip).limit(limit).lean(),
      Game.countDocuments(),
    ]);

    return NextResponse.json({
      success: true,
      count: games.length,
      total,
      page,
      limit,
      games,
    });
  } catch (error) {
    console.error('Error fetching games:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch games',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
