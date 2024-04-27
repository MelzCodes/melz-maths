/* eslint-disable @next/next/no-async-client-component */
"use client";

import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { toast } from "sonner";

const testimonials = [
  {
    quote:
      "Matteo's tutoring was a game-changer for me during my Leaving Cert. His clear explanations and patient demeanor helped me grasp complex concepts. Thanks to him, I not only passed but also achieved a higher grade than I imagined!",
    name: "Sarah",
    title: "Leaving Cert Higher Level Student",
  },
  {
    quote:
      "I can't thank Matteo enough for his guidance and support. With his help, I gained the confidence to tackle even the toughest problems and performed exceptionally well in my exam.",
    name: "Michael",
    title: "Leaving Cert Higher Level Student",
  },
  {
    quote:
      "Choosing Matteo as my Maths tutor was one of the best decisions I made. Thanks to him, I achieved my desired grade in Maths and felt more prepared than ever.",
    name: "Emily",
    title: "Junior Cert Higher Level Student",
  },
  {
    quote:
      "Matteo quickly turned things around for me. His structured approach and encouragement gave me the confidence to tackle challenging problems with ease.",
    name: "David",
    title: "Junior Cert Higher Level Student",
  },
  {
    quote:
      "Matteo's tutoring was instrumental in helping me excel in my Leaving Cert. Thanks to him, Maths went from being my weakest subject to one of my strongest.",
    name: "Emma",
    title: "Leaving Cert Higher Level Student",
  },
];

export default async function Home() {
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
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </>
  );
}
