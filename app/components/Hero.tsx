"use client";

import { Button } from "@/app/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          width={100}
          height={100}
          alt="Modern workspace"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-white/30" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/40" />
      </div>

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
              <Button size="lg" className="cursor-pointer">
                Start a Project
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg" className="hover:bg-dusk cursor-pointer">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Abstract Background Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-linear-to-tl from-lemon-100/25 to-transparent pointer-events-none z-0" />
    </section>
  );
};

export default Hero;
