"use client";

import Navbar from "@/components/Navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Button
        className="m-5"
        onClick={() =>
          toast.success("Thanks for signing up ❤️", {
            description: "Enjoy all your free resources! 🎉",
          })
        }
      >
        Show Toast
      </Button>
    </>
  );
}
