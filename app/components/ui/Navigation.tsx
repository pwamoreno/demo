"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkHero, setIsDarkHero] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check if the page has a dark hero section
    const checkHeroTheme = () => {
      const heroSection = document.querySelector("[data-hero-theme]");
      if (heroSection) {
        const theme = heroSection.getAttribute("data-hero-theme");
        setIsDarkHero(theme === "dark");
      } else {
        setIsDarkHero(false);
      }
    };

    // Check immediately and on path changes
    checkHeroTheme();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    {
      name: "Work",
      href: "/work",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  // Determine if we should use light text (dark background)
  const useLightText = !scrolled && isDarkHero;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white backdrop-blur-md border-b border-slate-100 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight z-50 relative"
          >
            <Image
              src="/Asset2.svg"
              alt="protean logo"
              width={300}
              height={80}
              className={cn(
                "h-10 w-auto transition-all duration-300",
                useLightText && "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  useLightText
                    ? pathname === link.href
                      ? "text-white font-semibold"
                      : "text-white/90 hover:text-lemon-500"
                    : pathname === link.href
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-lemon-500"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-0.5 transition-colors duration-300",
                      useLightText ? "bg-white" : "bg-lemon-500"
                    )}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/shop"
              className={cn(
                "p-2 rounded-md transition-all duration-300",
                useLightText
                  ? "bg-lemon-500 backdrop-blur-sm hover:bg-lemon-600"
                  : "bg-lemon-500 hover:bg-lemon-600"
              )}
            >
              <ShoppingBag
                className={cn(
                  "h-5 w-5 transition-colors duration-300",
                  useLightText ? "text-forest-900" : "text-dusk"
                )}
              />
            </Link>
            <Link href="/contact">
              <Button
                size="sm"
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  useLightText && "bg-lemon-500 hover:bg-lemon-600 text-slate-900"
                )}
              >
                Start a Project
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className={cn(
              "md:hidden z-50 p-2 transition-all duration-300",
              useLightText ? "text-white" : "text-slate-600"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="fixed inset-0 bg-white z-40 pt-24 px-4 md:hidden"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-2xl font-medium text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="pt-4">
                <Button className="w-full" size="lg">
                  Start a Project
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}