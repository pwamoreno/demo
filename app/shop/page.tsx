"use client";

import { MasonryGrid } from "../components/ui/MasonryGrid"
import { ProductCard } from "../components/ProductCard";
import { products } from "../lib/data";
import { useState } from "react";

const Shop = () => {

    const [category, setCategory] = useState('All');
    const filteredProducts = category === 'All' ? products : products.filter(p => p.category === category);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Shop
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            High-quality digital assets, templates, and resources for designers
            and developers.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
            {["All", "UI Kits", "Templates", "Assets", "Icons"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <MasonryGrid
          columns={{
            default: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </MasonryGrid>
      </div>
    </div>
  );
};

export default Shop;
