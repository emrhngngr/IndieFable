"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface Game {
  _id: string;
  title: string;
  slug: string;
  image: string;
  genre: string;
  curatorTagline: string;
  platforms: string[];
  isFree: boolean;
}

const platformIcons: Record<string, React.ReactNode> = {
  windows: <FaWindows className="text-blue-500" />,
  mac: <FaApple className="text-gray-300" />,
  linux: <FaLinux className="text-green-500" />,
};

const GameList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/games');
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch games');
        }

        setGames(data.games);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading games...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">❌ {error}</p>
          <Button 
            onClick={() => window.location.reload()} 
            variant="secondary"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-gray-400 text-lg">No games found. Import games first!</p>
          <Button 
            onClick={() => window.open('/api/import-games', '_blank')}
            variant="secondary"
            className="mt-4"
          >
            Import Games
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <div
          key={game._id}
          className="bg-white/10 backdrop-blur-sm rounded-lg px-4 pt-4 border border-white/20 transition-all duration-300 hover:transform hover:border-white/50 flex flex-col h-full"
        >
          <div className="flex justify-between items-start mb-2 min-h-[60px]">
            <div className="flex-1 pr-2">
              <h5 className="text-xs text-gray-50 opacity-40 font-light">
                {game.genre}
              </h5>
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{game.title}</h3>
            </div>
            <div className="flex space-x-2 flex-shrink-0">
              {game.platforms.map((platform) => (
                <span
                  key={platform}
                  className="text-sm bg-white/10 text-gray-300 px-2 py-2 rounded-md border border-white/20 flex items-center space-x-1"
                >
                  {platformIcons[platform] || null}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full h-48 rounded-md mb-4 overflow-hidden flex-shrink-0 relative bg-gray-800">
            <Image
              src={game.image}
              alt={game.title}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-gray-400 text-sm line-clamp-3 mb-auto">{game.curatorTagline}</p>
          <div className="py-4 flex justify-between items-center">
            <div className="flex items-center">
              {game.isFree ? (
                <span className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-md text-sm font-semibold text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                  FREE
                </span>
              ) : (
                <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-md text-sm font-semibold text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                  PAID
                </span>
              )}
            </div>
            <div>
                <Button variant={'ghost'} className="border border-white/5 hover:border-white/20 hover:bg-white/10">
                  View Game
                </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
