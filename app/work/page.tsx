"use client";

import { useState } from "react";
import { projects } from "../lib/data";
import { ProjectCard } from "../components/ProjectCard";
import { Button } from "../../components/ui/button";
// import { Select } from "../../components/ui/select";
import { motion } from "framer-motion";

const Work = () => {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Fintech",
    "E-commerce",
    "Healthcare",
    "Architecture",
    "Art & Culture",
  ];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.industry === filter);
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Our Work
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            A selection of projects that define our approach to digital product
            design.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 border-b border-slate-100 pb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
          <div className="w-full md:w-auto">
            <span className="text-sm text-slate-500">
              Showing {filteredProjects.length} projects
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;