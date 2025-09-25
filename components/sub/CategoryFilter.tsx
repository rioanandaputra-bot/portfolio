"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full border transition-all duration-300 ${
            activeCategory === category
              ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white border-transparent"
              : "bg-transparent text-gray-300 border-gray-600 hover:border-orange-500/50 hover:text-orange-300"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category === "all"
            ? "All Posts"
            : category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </motion.button>
      ))}
    </div>
  );
}