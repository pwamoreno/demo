"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "../../lib/data";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MasonryGrid } from "../../components/ui/MasonryGrid";

import { useParams } from 'next/navigation';

// interface CaseStudyProps {
//   params: {
//     slug: string;
//   };
// }

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log("Slug:", slug);
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return <div className="pt-32 text-center">Project not found</div>;

  return (
    <div>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="h-[60vh] md:h-[80vh] relative w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <div className="max-w-7xl mx-auto">
              <Link
                href="/work"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-8 text-sm md:text-base text-white/90">
                <div>
                  <span className="block opacity-60 text-xs uppercase tracking-wider mb-1">
                    Client
                  </span>
                  {project.client}
                </div>
                <div>
                  <span className="block opacity-60 text-xs uppercase tracking-wider mb-1">
                    Services
                  </span>
                  {project.services.join(", ")}
                </div>
                <div>
                  <span className="block opacity-60 text-xs uppercase tracking-wider mb-1">
                    Year
                  </span>
                  {project.year}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h3 className="text-xl font-bold mb-4">Overview</h3>
              <p className="text-slate-600 leading-relaxed">
                {project.content.overview}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">The Outcome</h3>
              <p className="text-slate-600 leading-relaxed">
                {project.content.outcome}
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-6">The Problem</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.content.problem}
              </p>
            </section>
            <section>
              <h2 className="text-3xl font-bold mb-6">The Solution</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.content.solution}
              </p>
            </section>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold mb-12 text-center">
              Project Gallery
            </h3>
            <MasonryGrid
              columns={{
                default: 1,
                sm: 2,
                md: 2,
                lg: 2,
              }}
            >
              {project.gallery.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  width={100}
                  height={100}
                  alt={`Gallery ${i}`}
                  className="w-full rounded-lg shadow-sm"
                  loading="lazy"
                />
              ))}
            </MasonryGrid>
          </div>
        </div>

        {/* Next Project CTA */}
        <div className="py-32 text-center bg-white">
          <h2 className="text-3xl font-bold mb-8">
            Ready to start your project?
          </h2>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
