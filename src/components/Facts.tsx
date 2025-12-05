"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Facts = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="facts"
      className="section-border py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-black overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Section Label */}
        <motion.p
          className="text-sm font-medium mb-6 md:mb-8 lg:mb-12"
          style={{ color: "#ffffff" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Facts ↘
        </motion.p>

        {/* Bio Content */}
        <div className="max-w-4xl">
          <motion.div
            className="space-y-4 md:space-y-6 text-body"
            style={{ 
              color: "#ffffff",
              fontSize: "clamp(14px, 2vw, 18px)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I&apos;m a UI/UX Designer passionate about creating digital experiences that 
              are not only beautiful but also intuitive and accessible. With 3 years of 
              experience, I&apos;ve had the privilege of working with some amazing teams 
              and products that have shaped my design philosophy.
            </p>

            <p>
              Currently, I&apos;m crafting delightful user experiences at{" "}
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover font-medium"
                style={{ color: "#ffffff" }}
              >
                Google
              </a>
              , where I work on products that reach millions of users daily. 
              My focus is on creating design systems that scale and ensuring 
              consistency across complex product ecosystems.
            </p>

            <p>
              Before Google, I designed engaging experiences at{" "}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover font-medium"
                style={{ color: "#ffffff" }}
              >
                YouTube
              </a>
              , where I learned the art of balancing creator needs with viewer 
              experience. This taught me how to design for diverse user groups 
              with sometimes conflicting goals.
            </p>

            <p>
              I believe great design is invisible – it should feel so natural that 
              users don&apos;t even notice it. My approach combines data-driven insights 
              with creative intuition, always keeping the end user at the center 
              of every decision.
            </p>

            <p>
              When I&apos;m not pushing pixels, you&apos;ll find me exploring new design tools, 
              contributing to the design community through workshops and mentorship, 
              or experimenting with 3D and motion design. I&apos;m also deeply interested 
              in the intersection of AI and design – exploring how we can leverage 
              technology to enhance creative workflows.
            </p>

            <p>
              I&apos;m always excited to connect with fellow designers, developers, and 
              anyone passionate about creating meaningful digital experiences. 
              Let&apos;s build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
