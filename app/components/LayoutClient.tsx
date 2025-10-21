"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WaitlistDialog from "./WaitlistDialog";

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  return (
    <>
      <Navbar onJoinWaitlist={handleJoinWaitlist} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WaitlistDialog 
        open={isWaitlistOpen} 
        onOpenChange={setIsWaitlistOpen} 
      />
    </>
  );
}
