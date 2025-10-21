"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Bot detection field
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setIsError(false);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          honeypot: honeypot, // Hidden field for bot detection
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Success
      setMessage("🎉 Welcome to the waitlist! We'll notify you when we launch.");
      setEmail("");
      setName("");
      setHoneypot("");
      
      // Close dialog after 2 seconds
      setTimeout(() => {
        onOpenChange(false);
        setMessage("");
      }, 2000);

    } catch (error) {
      setIsError(true);
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setName("");
    setHoneypot("");
    setMessage("");
    setIsError(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
          <DialogDescription>
            Be the first to know when IndieFable launches! We'll notify you as soon as we're ready.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Honeypot field - hidden from users, visible to bots */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ 
                position: 'absolute',
                left: '-9999px',
                top: '-9999px',
                opacity: 0,
                pointerEvents: 'none'
              }}
              tabIndex={-1}
              autoComplete="off"
            />
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                className="col-span-4"
                placeholder="Your name"
                required
                disabled={isSubmitting}
                maxLength={100}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="col-span-4"
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                maxLength={255}
              />
            </div>
            
            {/* Message display */}
            {message && (
              <div className={`text-sm p-3 rounded-md ${
                isError 
                  ? 'bg-red-50 text-red-700 border border-red-200' 
                  : 'bg-green-50 text-green-700 border border-green-200'
              }`}>
                {message}
              </div>
            )}
          </div>
            <Button 
              className="cursor-pointer flex w-full justify-center" 
              type="submit" 
              disabled={isSubmitting || !name.trim() || !email.trim()}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
        </form>
        {/* SIGN IN WITH Google or Github section */}
        {/* <div className="flex items-center gap-4 mt-4 justify-center">
          <span className="flex-grow border-t"></span>
          <div className="text-xs text-center text-gray-500">
            OR SIGN IN WITH
          </div>
          <span className="flex-grow border-t"></span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button
            variant="outline"
            className="cursor-pointer"
            size={'lg'}
            onClick={() => window.open("/auth/google", "_self")}
          >
            <FcGoogle className="size-[24px] "/>
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer"
            size={'lg'}
            onClick={() => window.open("/auth/github", "_self")}
          >
            <FaGithub className="size-[24px]" />
          </Button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}