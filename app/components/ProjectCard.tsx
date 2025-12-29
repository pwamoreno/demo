// import React, { lazy } from "react";
import Link from "next/link";
import { Project } from "../lib/types";
import { Card } from "./ui/Card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`}>
      <Card hoverEffect className="group h-full flex flex-col">
        <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
          <Image
            src={project.image}
            alt={project.title}
            width={100}
            height={100}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                {project.client}
              </p>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-lemon-500 transition-colors">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-lemon-500 transition-colors" />
          </div>
          <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.services.slice(0, 2).map((service) => (
              <span
                key={service}
                className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600 border border-slate-100"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
