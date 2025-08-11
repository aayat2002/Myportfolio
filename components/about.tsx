"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        Coming from an <span className="font-medium">Arts background</span>, I
        discovered my passion for programming during my graduation. What started
        as a side interest soon became a serious pursuit—I was fascinated by how
        code could bring ideas to life. Over time, my excitement for{" "}
        <span className="font-medium">frontend development</span> grew stronger,
        and I eventually made the bold decision to{" "}
        <span className="font-medium">drop out</span> of my graduation and fully
        commit to learning code.
      </p>

      <p className="mb-3">
        I began my journey by enrolling in a coding bootcamp, dedicating myself
        to learning{" "}
        <span className="font-medium">frontend web development</span>. I was
        especially drawn to the <span className="italic">problem-solving</span>{" "}
        aspect of programming—there's nothing more satisfying than finally
        figuring out a{" "}
        <span className="font-medium">
          solution to a tough programming challenge
        </span>
        .
      </p>

      <p className="mb-3">
        My first opportunity came as a{" "}
        <span className="font-medium">
          Frontend Developer Intern at Pixel Stitch
        </span>
        , where I worked on real-world projects for 6 months. After that, I
        joined <span className="font-medium">CV Dragon</span> for another
        6-month internship, managing upcoming projects and helping improve their
        UI. Later, I freelanced with <span className="font-medium">Zorcha</span>
        , building responsive HTML templates that exactly replicated Canva
        designs.
      </p>

      <p className="mb-3">
        My core stack includes{" "}
        <span className="font-medium">
          React.js, Next.js, HTML, CSS, Tailwind CSS
        </span>
        , and <span className="font-medium">JavaScript</span>. I'm also learning{" "}
        <span className="font-medium">backend development</span> and have
        started building full-stack projects using{" "}
        <span className="font-medium">Node.js, Express.js</span>, and{" "}
        <span className="font-medium">MongoDB</span>. I enjoy exploring{" "}
        <span className="font-medium">new programming languages</span> and
        understanding how everything connects behind the scenes.
      </p>

      <p className="mb-3">
        I’m currently seeking a{" "}
        <span className="font-medium">full-time role</span> as a{" "}
        <span className="font-medium">Frontend or Full Stack Developer</span>{" "}
        where I can continue to grow, contribute to{" "}
        <span className="font-medium">dynamic projects</span>, and stay
        up-to-date with <span className="underline">modern technologies</span>{" "}
        in the ever-evolving world of{" "}
        <span className="font-medium">software development</span>.
      </p>
    </motion.section>
  );
}
