import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-16 text-white flex items-center justify-between px-10">
        <a href="/" className="text-2xl cursor-pointer" >IndieFable</a>
        <div>
          <ul className="flex space-x-20 text-lg">
            <Button className=" bg-white/10 px-6 py-2 cursor-pointer backdrop-blur-sm hover:bg-white/25 rounded text-glow-hover">Join to Waitlist</Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
