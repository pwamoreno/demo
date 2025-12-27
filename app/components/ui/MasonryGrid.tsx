"use client"

import React, { useEffect, useState, Children, isValidElement } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
interface MasonryGridProps {
  children: React.ReactNode[];
  className?: string;
  columns?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}
export function MasonryGrid({
  children,
  className,
  columns = {
    default: 1,
    sm: 2,
    md: 3,
    lg: 4,
  },
}: MasonryGridProps) {
  const [columnCount, setColumnCount] = useState(columns.default);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280 && columns.xl) setColumnCount(columns.xl);
      else if (width >= 1024 && columns.lg) setColumnCount(columns.lg);
      else if (width >= 768 && columns.md) setColumnCount(columns.md);
      else if (width >= 640 && columns.sm) setColumnCount(columns.sm);
      else setColumnCount(columns.default);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [columns]);
  // Distribute children into columns
  const gridColumns: React.ReactNode[][] = Array.from(
    {
      length: columnCount,
    },
    () => []
  );
  Children.forEach(children, (child, index) => {
    if (isValidElement(child)) {
      gridColumns[index % columnCount].push(child);
    }
  });
  return (
    <div className={cn("flex gap-6", className)}>
      {gridColumns.map((col, i) => (
        <div key={i} className="flex flex-col gap-6 flex-1">
          {col.map((item, j) => (
            <motion.div
              key={j}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: j * 0.1,
                duration: 0.5,
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
