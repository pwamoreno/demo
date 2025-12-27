"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            We design & build <br />
            <span className="text-slate-500">digital products that scale.</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            A full-service digital agency partnering with startups and
            enterprise clients to create exceptional digital experiences.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact">
              <Button size="lg">Start a Project</Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 translate-x-1/3 -translate-y-1/4">
        <div className="w-[800px] h-[800px] rounded-full bg-linear-to-br from-blue-100 to-slate-100 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
