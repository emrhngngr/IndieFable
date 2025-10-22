import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Game from '@/models/Game';
import gamesData from '@/app/data/games.json';

export async function GET() {
  try {
    // Connect to MongoDB using Mongoose
    await connectDB();

    // Check if data already exists
    const existingCount = await Game.countDocuments();
    
    if (existingCount > 0) {
      return NextResponse.json({
        success: false,
        message: `Database already has ${existingCount} games. Skipping import.`,
        existingCount,
      });
    }

    // Import games using Mongoose model
    const gamesToInsert = gamesData.games.map(game => ({
      originalId: game._id,
      title: game.title,
      slug: game.slug,
      image: game.image,
      genre: game.genre,
      curatorTagline: game.curatorTagline,
      platforms: game.platforms,
      isFree: game.isFree,
    }));

    const result = await Game.insertMany(gamesToInsert);

    return NextResponse.json({
      success: true,
      message: 'Games imported successfully!',
      insertedCount: result.length,
      games: result,
    });
  } catch (error) {
    console.error('Error importing games:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to import games',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
