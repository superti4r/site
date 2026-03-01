"use client";

import { BebasNeue } from "@/addons/fonts-loaders";
import { TextReveal } from "@/components/typography/text-reveals";
import Dots from "@/components/svg/dots";
import Image from "next/image";

export default function Abouts({ lang }: { lang: any }) {
  return (
    <section
      id="about"
      className="md:min-h-screen w-full px-4 md:px-8 relative pt-24 pb-0 md:pt-24 md:pb-24"
    >
      <span
        className={`${BebasNeue.className} absolute top-8 left-4 text-8xl md:text-[clamp(4rem,18vw,20rem)] font-medium leading-[0.95] tracking-tight text-white opacity-10 md:opacity-5 uppercase`}
      >
        {lang.about_section.title}
      </span>

      <Image
        src="/assets/images/superti4r.webp"
        alt="Bachtiar Dwi Pramudi"
        width={500}
        height={500}
        className="hidden md:block absolute top-3/4 left-24 -translate-y-1/2 grayscale"
      />

      <div className="hidden md:block absolute bottom-0 right-32 w-[18vw] h-[18vh]">
        <Dots />
      </div>

      <div className="w-full flex justify-between">
        <div className="w-[85%] md:w-2/5 h-full"></div>
        <div className="flex flex-col">
          <TextReveal className="hidden md:block max-w-[56vw] text-[clamp(1.2rem,4vw,3.5rem)] leading-[1.2] tracking-wide font-regular">
            {lang.about_section.paragraph}
          </TextReveal>

          <h1 className="mt-10 md:hidden text-neutral-400 text-3xl px-4 tracking-tight font-normal">
            {lang.about_section.paragraph}
          </h1>
        </div>
      </div>
      <div className="md:hidden flex flex-col w-full">
        <div className="mt-10 w-[200px] self-end">
          <Dots />
        </div>

        <div className="flex justify-start">
          <Image
            src="/assets/images/superti4r.webp"
            alt="Bachtiar Dwi Pramudi"
            width={250}
            height={250}
            className="grayscale mt-10 items-start"
          />
        </div>
      </div>
    </section>
  );
}
