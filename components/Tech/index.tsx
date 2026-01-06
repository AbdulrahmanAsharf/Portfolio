"use client";

import type { Technology } from "@/constants/types";

import  BallCanvas  from "./BallCanvas";
import { SectionWrapper } from "@/constants/SectionWrapper";
import { technologies } from "@/constants/index";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology: Technology) => (
        <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
