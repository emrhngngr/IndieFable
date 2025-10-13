import { Button } from "@/components/ui/button";
import EngineHive from "./components/EngineHive";
import { FaGem } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <section className="min-h-[calc(100vh-65px)] flex items-center relative overflow-hidden w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col text-white text-left">
              <p className="text-6xl">
                Discover Your Next Favorite Indie Game & Follow Its Creation.
              </p>

              <p className="text-2xl mt-4 text-gray-300">
                IndieFable is an indie game showcase where players can discover unique games and follow their entire development journey.
              </p>

              <div className="mt-8 flex">
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="cursor-pointer"
                >
                  Join the Waitlist
                </Button>
                <Button
                  variant={"default"}
                  size={"lg"}
                  className="ml-4 cursor-pointer"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <EngineHive />
            </div>
          </div>

          {/* Value Proposition Section */}
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Discover Hidden Gems */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <FaGem className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Discover Hidden Gems
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Discover indie games made with passion that stand out among
                thousands. Find unique experiences crafted by talented creators.
              </p>
            </div>
          </div>

          {/* Follow the Journey */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Follow the Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Witness the entire creation story from first concept sketches to
                the final product. Be part of the development journey.
              </p>
            </div>
          </div>

          {/* Connect with Creators */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Connect with Creators
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Support developers directly and see behind the scenes of game
                development. Connect with the creative minds behind the games.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
