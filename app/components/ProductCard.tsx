// import React, { lazy } from "react";
import Link from "next/link";
import { Product } from "../lib/types";
import { Card } from "./ui/Card";
import { formatCurrency } from "../lib/utils";
import Image from "next/image";
// import { px } from "framer-motion";
interface ProductCardProps {
  product: Product;
}
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.id}`} className="block mb-6">
      <Card hoverEffect className="group overflow-hidden">
        <div className="relative overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-end">
            <span className="bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded">
              {formatCurrency(product.price)}
            </span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-slate-500 mb-1">{product.category}</p>
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </div>
      </Card>
    </Link>
  );
}
