"use client";

import { Transition } from "@/components/animation/Transition";
import Education from "@/components/experience/Education";
import WorkExperience from "@/components/experience/WorkExperience";
import React from "react";

const Experience = () => {
  return (
    <Transition>
      <WorkExperience />
      <Education />
    </Transition>
  );
};

export default Experience;
