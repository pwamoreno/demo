"use client";

import Link from "next/link"
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-slate-900 block mb-4"
            >
              AGENCY<span className="text-slate-400">.</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              We design and build digital products that scale. Based in San
              Francisco, working globally.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Sitemap</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/work" className="hover:text-slate-900">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-slate-900">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Social</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Newsletter</h3>
            <p className="text-sm text-slate-600 mb-4">
              Subscribe to our newsletter for design insights and updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800">
                Sub
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Agency Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-400">
            <Instagram className="h-5 w-5 hover:text-slate-900 cursor-pointer" />
            <Twitter className="h-5 w-5 hover:text-slate-900 cursor-pointer" />
            <Linkedin className="h-5 w-5 hover:text-slate-900 cursor-pointer" />
            <Github className="h-5 w-5 hover:text-slate-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
