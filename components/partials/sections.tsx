"use client";

import HeroView from "@/components/sections/hero";
import ProjectsView from "@/components/sections/projects";
import AboutView from "@/components/sections/about";
import ServicesView from "@/components/sections/services";
import ContactView from "@/components/sections/contact";

type Props = {
  id: "hero" | "projects" | "about" | "services" | "contact";
  lang: any;
};

const Views = {
  hero: HeroView,
  about: AboutView,
  projects: ProjectsView,
  services: ServicesView,
  contact: ContactView,
};

export default function Section(props: Props) {
  const View = Views[props.id];
  return (
    <section className="flex w-screen min-h-screen">
      <View lang={props.lang} />
    </section>
  );
}
