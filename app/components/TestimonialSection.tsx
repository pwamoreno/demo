import { testimonials } from "../lib/data";
import { Card } from "./ui/Card";
import { Quote } from "lucide-react";
import Image from "next/image";

export function TestimonialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Client Stories
          </h2>
          <p className="text-lg text-slate-600">
            Don&apos;t just take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 h-full flex flex-col bg-slate-50 border-none"
            >
              <Quote className="h-8 w-8 text-slate-300 mb-6" />
              <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-1">
                {testimonial.content}
              </p>
              <div className="flex items-center mt-auto">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={100}
                  height={100}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
