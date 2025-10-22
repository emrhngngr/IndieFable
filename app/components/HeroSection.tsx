import { Button } from "@/components/ui/button";
import EngineHive from "./EngineHive";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export default function HeroSection({ onJoinWaitlist }: HeroSectionProps) {
  return (
    <section className="min-h-[calc(100vh-65px)] flex items-center relative overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col text-white text-left">
            <p className="text-4xl md:text-6xl font-bold">
              Find Your Next
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-green-500 bg-clip-text text-transparent animate-gradient-x inline-block">
                Hidden Gem
              </span>
            </p>
            <p className="text-md lg:text-2xl mt-4 text-gray-300">
              IndieFable is a{" "}
              <span className=" text-blue-400">hand-picked</span> showcase
              designed to find and feature{" "}
              <span className=" text-green-500">the best indie games</span>.
              
            </p>

            <div className="mt-8 flex">
              <Button
                variant={"secondary"}
                size={"lg"}
                className="cursor-pointer"
                onClick={onJoinWaitlist}
              >
                Join the Waitlist
              </Button>
              <Button
                variant={"default"}
                size={"lg"}
                className="ml-4 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/emrhngngr/IndieFable",
                    "_blank"
                  )
                }
              >
                Open Source
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <EngineHive />
          </div>
        </div>
      </div>
    </section>
  );
}
