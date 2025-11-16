"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const ContainerScroll = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        style={{ perspective: "1000px", ...props.style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ContainerScroll.displayName = "ContainerScroll";

const CardSticky = React.forwardRef(
  (
    {
      index,
      incrementY = 10,
      incrementZ = 10,
      stepNumber,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const y = index * incrementY;
    const z = index * incrementZ;

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{
          top: typeof y === "number" ? `${y}px` : y,
          zIndex: z,
          backfaceVisibility: "hidden",
          ...style,
        }}
        className={cn("sticky", className)}
        {...props}
      >
        {stepNumber && (
          <span className="pointer-events-none absolute -bottom-4 right-5 text-[64px] md:text-[88px] font-extrabold text-blue-600/30 dark:text-blue-400/40 select-none z-0">
            {stepNumber}
          </span>
        )}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);

CardSticky.displayName = "CardSticky";

export { ContainerScroll, CardSticky };
