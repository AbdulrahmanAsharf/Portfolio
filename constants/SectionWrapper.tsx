import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";

import { ComponentType } from "react";

export const SectionWrapper = (
  Component: ComponentType,
  idName: string
) => {
  return function HOC() {
    return (
     <motion.section
  variants={staggerContainer(0.1, 0)} // ✅ هنا حددت 0.1s بين كل عنصر
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
>
  <span className="hash-span" id={idName} />
  <Component />
</motion.section>

    );
  };
};
