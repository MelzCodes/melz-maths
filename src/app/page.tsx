"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <>
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
