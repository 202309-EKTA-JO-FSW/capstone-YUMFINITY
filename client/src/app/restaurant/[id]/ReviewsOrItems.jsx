"use client";

import { useState } from "react";
import ItemCard from "../../components/Restaurant/ItemCard";
import ReviewCard from "../../components/Restaurant/ReviewCard";
import ShoppingCart from "./ShoppingCart";

export default function ReviewsOrItems({ items, reviews }) {
  const [isItems, setItems] = useState(true); // true: show items; false: show reviews
  console.log(items, reviews);

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
        <div className="my-6 flex flex-col items-start justify-center gap-4 ">
          {isItems
            ? (!items || items?.length < 1) && (
                <div>There are no Items for this restaurant.</div>
              )
            : (!reviews || reviews?.length < 1) && (
                <div className="px-16 py-10 font-boston text-2xl">
                  There are no Reviews for this restaurant.
                </div>
              )}
          {isItems
            ? items &&
              items.map((item) => <ItemCard key={item._id} item={item} />)
            : reviews &&
              reviews.map((rev) => <ReviewCard key={rev._id} review={rev} />)}
        </div>
      </section>
      <aside>
        <ShoppingCart />
      </aside>
    </div>
  );
}
