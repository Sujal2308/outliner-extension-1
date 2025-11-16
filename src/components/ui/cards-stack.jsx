"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

const CardsScrollContext = React.createContext(null);

const ContainerScroll = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
    });

    return (
      <CardsScrollContext.Provider value={scrollYProgress}>
        <div
          ref={containerRef}
          className={cn("relative w-full overflow-visible", className)}
          style={{ ...props.style }}
          {...props}
        >
          {children}
        </div>
      </CardsScrollContext.Provider>
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
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const cardRef = React.useRef(null);
    // Read the shared container scroll progress from context
    const containerProgress = React.useContext(CardsScrollContext);

    // If the context isn't available, fallback to per-card scroll (best-effort)
    const { scrollYProgress: localProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "start start"],
    });

    const progress = containerProgress ?? localProgress;

    // Smooth scale and opacity transitions as cards enter view
    const scale = useTransform(progress, [0, 0.5, 1], [0.92, 0.96, 1]);
    const opacity = useTransform(progress, [0, 0.25, 1], [0.6, 0.85, 1]);

    const y = index * incrementY;
    const zIndex = index * incrementZ;

    // Translate cards upward as container scrolls to create overlap/stacking
    // Map overall container progress to a translateY range per card.
    const translateY = useTransform(progress, [0, 1], [y, -index * incrementY * 0.8]);

    return (
      <motion.div
        ref={cardRef}
        layout="position"
        style={{
          top: `${y}px`,
          zIndex: zIndex,
          y: translateY,
          scale,
          opacity,
          backfaceVisibility: "hidden",
          ...style,
        }}
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

CardSticky.displayName = "CardSticky";

export { ContainerScroll, CardSticky };
