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
            <p className="text-4xl md:text-6xl">
              Discover Your Next Favorite Indie Game & Follow Its Creation.
            </p>

            <p className="text-md lg:text-2xl mt-4 text-gray-300">
              IndieFable is an indie game showcase where players can discover unique games and follow their entire development journey.
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
              >
                Learn More
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
