import { Button } from "@/app/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Hero from "./components/Hero"
import { ProjectCard } from "./components/ProjectCard";
import { ProductCard } from "./components/ProductCard";
import { TestimonialSection } from "./components/TestimonialSection";
import { MasonryGrid } from "./components/ui/MasonryGrid";
import { LogoCloud } from "./components/LogoCloud";
import { projects, products } from './lib/data';

const Home = () => {

  const featuredProjects = projects.slice(0, 4);
  const shopPreview = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <LogoCloud />

      {/* Featured Work */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Selected Work
              </h2>
              <p className="text-lg text-slate-600 max-w-xl">
                A collection of our most recent projects across design and
                development.
              </p>
            </div>
            <Link href="/work" className="hidden md:block">
              <Button variant="ghost" className="group hover:cursor-pointer">
                View All Work{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/work">
              <Button variant="outline" className="w-full">
                View All Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Digital Shop
              </h2>
              <p className="text-lg text-slate-600 max-w-xl">
                Premium assets, templates, and UI kits for creators.
              </p>
            </div>
            <Link href="/shop" className="hidden md:block">
              <Button variant="ghost" className="group">
                Visit Shop{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <MasonryGrid
            columns={{
              default: 1,
              sm: 2,
              md: 3,
              lg: 3,
            }}
          >
            {shopPreview.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </MasonryGrid>

          <div className="mt-12 text-center md:hidden">
            <Link href="/shop">
              <Button variant="outline" className="w-full">
                Visit Shop
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-32 bg-forest-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to start your project?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s collaborate to build something extraordinary. We&apos;re currently
            accepting new clients for Q4.
          </p>
          <Link href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-offwhite text-forest-900 hover:bg-lemon-500 hover:cursor-pointer"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
