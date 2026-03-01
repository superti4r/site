"use client";

import Heros from "@/components/sections/heros";
import Projects from "@/components/sections/projects";
import Abouts from "@/components/sections/abouts";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contacts";

type Props = {
  id: "hero" | "projects" | "about" | "services" | "contact";
  lang: any;
};

const Views = {
  hero: Heros,
  about: Abouts,
  projects: Projects,
  services: Services,
  contact: Contact,
};

export default function Section(props: Props) {
  const View = Views[props.id];
  return (
    <section className="flex w-screen min-h-screen">
      <View lang={props.lang} />
    </section>
  );
}
