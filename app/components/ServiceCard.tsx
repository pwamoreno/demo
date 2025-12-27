import Link from "next/link";
import { Service } from "../lib/types";
import { Card } from "./ui/Card";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
interface ServiceCardProps {
  service: Service;
}
export function ServiceCard({ service }: ServiceCardProps) {
  // @ts-expect-error- dynamic icon
  const Icon = Icons[service.icon] || Icons.HelpCircle;
  return (
    <Link href={`/services/${service.slug}`}>
      <Card hoverEffect className="h-full p-8 flex flex-col group">
        <div className="h-12 w-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
          <Icon className="h-6 w-6 text-slate-900 group-hover:text-blue-600 transition-colors" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          {service.title}
        </h3>
        <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
          {service.description}
        </p>
        <div className="flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
          Learn More{" "}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
}
