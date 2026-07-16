"use client";

import { GrainGradient } from '@paper-design/shaders-react';
import { cva } from "class-variance-authority";
import Link from "next/link";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { cn } from "@/lib/utils";

const backgroundImageVariants = cva("", {
  variants: {
    variant: {
      contour:
        "bg-[url(/static/images/hero-background/contour_dark.svg)] bg-no-repeat bg-cover bg-position-[center_top_30svh] dark:bg-[url(/static/images/hero-background/contour_light.svg)]",
      blackhole:
        "bg-[url(/static/images/hero-background/blackhole_dark.png)] bg-no-repeat bg-cover bg-position-[center_top_3svh] dark:bg-[url(/static/images/hero-background/blackhole_light.png)]",
    },
  },
  defaultVariants: {
    variant: "contour",
  },
});

export default function HeroSection() {
  return (
    <section className="relative flex flex-col">
      <div
        className={cn(
          "inner relative flex flex-col h-[32rem] justify-center border-separator/10 border-x px-4 transition-all *:transition-all sm:px-6 lg:flex-row lg:items-center lg:justify-center lg:gap-0 lg:px-16",
          backgroundImageVariants({ variant: "contour" })
        )}
      >
        <GrainGradient
          colors={["#700000", "#0080ff", "#f2ebca", "#33cc33"]}
          colorBack="#ffffff00"
          softness={1}
          intensity={1}
          noise={0.7}
          shape="corners"
          speed={1}
          scale={2}
          className="absolute inset-0 h-full w-full -z-50"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-linear-to-b from-transparent to-transparent -z-40" />
        <span className="flex gap-2">
          <
        </span>
      </div>
      <div className="border-separator/10 border-t">
        <div className="inner relative m-auto border-separator/10 border-x p-4">
          <span className="relative flex items-center justify-between font-montreal-mono text-xs opacity-90 transition-opacity duration-300 dark:opacity-75">
            <Link href="https://time.is/Jakarta" target="_blank">
              aa
            </Link>
            {/*<button type="button" onClick={cycleTheme}>
              <BauhausGenerator />
            </button>*/}
          </span>
          <PlusSeparator position={["top-left", "top-right"]} />
        </div>
      </div>
    </section>
  );
}
