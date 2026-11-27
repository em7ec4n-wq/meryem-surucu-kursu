import React from "react";
import { HeroSlider } from "@/components/HeroSlider";
import { EducationPlannerAndCompare } from "@/components/EducationPlannerAndCompare";
import { HomeSections } from "@/components/HomeSections";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <EducationPlannerAndCompare />
      <HomeSections />
      <CtaBand />
    </>
  );
}
