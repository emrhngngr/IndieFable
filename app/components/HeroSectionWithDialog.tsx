"use client";

import { useState } from "react";
import HeroSection from "./HeroSection";
import WaitlistDialog from "./WaitlistDialog";

export default function HeroSectionWithDialog() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  return (
    <>
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      <WaitlistDialog 
        open={isWaitlistOpen} 
        onOpenChange={setIsWaitlistOpen} 
      />
    </>
  );
}