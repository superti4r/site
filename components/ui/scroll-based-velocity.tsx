"use client";

import { useEffect, useRef, useState, useMemo, JSX } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  text: string;
  defaultVelocity?: number;
  className?: string;
}

interface ParallaxTextProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

const wrap = (min: number, max: number, v: number): number => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ParallaxText = ({
  children,
  baseVelocity = 100,
  className,
}: ParallaxTextProps): JSX.Element => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const calculateRepetitions = (): void => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 1;
        setRepetitions(Math.max(2, newRepetitions));
      }
    };

    calculateRepetitions();

    const resizeObserver = new ResizeObserver(calculateRepetitions);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [children]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const currentVelocity = velocityFactor.get();
    if (currentVelocity < 0) {
      directionFactor.current = -1;
    } else if (currentVelocity > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * Math.abs(currentVelocity);

    baseX.set(baseX.get() + moveBy);
  });

  const repetitionArray = useMemo(
    () =>
      Array.from({ length: repetitions }).map((_, i) => (
        <span key={i} ref={i === 0 ? textRef : null}>
          {children}{" "}
        </span>
      )),
    [repetitions, children],
  );

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap"
      ref={containerRef}
    >
      <motion.div
        className={cn("inline-block skew-x-[-50deg]", className)}
        style={{ x }}
      >
        {repetitionArray}
      </motion.div>
    </div>
  );
};

export default function VelocityScroll({
  text,
  defaultVelocity = 5,
  className,
}: VelocityScrollProps): JSX.Element {
  return (
    <section className="relative w-full text-black bg-gradient-to-r from-white to-[#F0F0F0] py-4">
      <ParallaxText baseVelocity={defaultVelocity} className={className}>
        {text}
      </ParallaxText>
      <ParallaxText baseVelocity={-defaultVelocity} className={className}>
        {text}
      </ParallaxText>
    </section>
  );
}
