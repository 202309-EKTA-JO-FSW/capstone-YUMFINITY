"use client";

import { useState } from "react";
import ItemCard from "../components/Restaurant/ItemCard";
import ReviewCard from "../components/Restaurant/ReviewCard";

export default function ReviewsOrItems() {
  const [isItems, setItems] = useState(true); // true: show items; false: show reviews

  return (
    <div className="grid-cols-3 md:grid">
      <div className="col-span-3 flex justify-center gap-3">
        <button
          className="inline-flex h-10 items-center justify-center rounded-md bg-[#FD7014] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
          onClick={() => setItems(true)}
        >
          View Menu
        </button>
        <button
          className="inline-flex h-10 items-center justify-center rounded-md bg-[#FD7014] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
          onClick={() => setItems(false)}
        >
          View Reviews
        </button>
      </div>
      <section className="md:col-span-2">
        <div className="mb-6 flex items-start justify-center gap-4 sm:flex-row"></div>
        {isItems ? <ItemCard /> : <ReviewCard />}
        {/* <Pagination /> */}
      </section>
    </div>
  );
}
