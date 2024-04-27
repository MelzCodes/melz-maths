/* eslint-disable @next/next/no-async-client-component */
"use client";

import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

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
      <div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Providing all the Leaving Cert Maths <br></br>{" "}
          <Highlight className="text-black dark:text-white my-2">
            Resources You Need
          </Highlight>
        </motion.h1>
      </div>
      <div className="flex justify-center items-center py-5">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9a2mLY8o7Mo?si=qDXlGroXn3PdDdvb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center my-10">
          What the Students Have to Say...
        </h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}
