import mongoose, { Schema, model, models } from 'mongoose';

// Game interface for TypeScript
export interface IGame {
  originalId?: string;
  title: string;
  slug: string;
  image: string;
  genre: string;
  curatorTagline: string;
  platforms: string[];
  isFree: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Game Schema with validation
const GameSchema = new Schema<IGame>(
  {
    originalId: {
      type: String,
      unique: true,
      sparse: true, // allows null/undefined
    },
    title: {
      type: String,
      required: [true, 'Game title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
      trim: true,
    },
    curatorTagline: {
      type: String,
      required: [true, 'Curator tagline is required'],
      maxlength: [500, 'Tagline cannot exceed 500 characters'],
    },
    platforms: {
      type: [String],
      required: [true, 'At least one platform is required'],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: 'At least one platform must be specified',
      },
    },
    isFree: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Indexes for better query performance
GameSchema.index({ slug: 1 });
GameSchema.index({ genre: 1 });
GameSchema.index({ isFree: 1 });
GameSchema.index({ platforms: 1 });

// Export the model (check if it already exists to avoid recompilation issues in Next.js)
const Game = models.Game || model<IGame>('Game', GameSchema);

export default Game;
