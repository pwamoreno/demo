"use client"
// import React, { Component } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({
  className,
  children,
  hoverEffect = false,
  onClick,
  ...props
}: CardProps) {
  const Component = hoverEffect ? motion.div : "div";
  const animationProps = hoverEffect
    ? {
        whileHover: {
          y: -4,
          transition: {
            duration: 0.2,
          },
        },
        initial: {
          opacity: 0,
          y: 20,
        },
        whileInView: {
          opacity: 1,
          y: 0,
        },
        viewport: {
          once: true,
        },
      }
    : {};
  return (
    // @ts-expect-error - framer motion types complexity
    <Component
      className={cn(
        "rounded-xl bg-white border border-slate-100 shadow-sm overflow-hidden",
        hoverEffect && "cursor-pointer hover:shadow-md transition-shadow",
        className
      )}
      onClick={onClick}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
}
