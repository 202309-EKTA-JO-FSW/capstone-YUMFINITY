"use client";

import { useEffect, useState } from "react";
import InfoCards from "./InfoCards";
import ReviewsOrItems from "./ReviewsOrItems";
import { useParams, useRouter } from "next/navigation";

export default function MainPage({ getRestaurantData }) {
  const [restaurant, setRestaurant] = useState(null);
  const [items, setItems] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const router = useRouter();

  async function fetchData() {
    const data = await getRestaurantData(id);
    if (data.message) return setError(data.message);
    const { restaurant, items, restaurantReviews } = data;
    setRestaurant(restaurant);
    setItems(items);
    setReviews(restaurantReviews);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return router.push("/not-found");

  return (
    <>
      <main>
        {restaurant && <InfoCards info={restaurant} />}
        <div className="space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Menu
              </div>
              <h2 className="font-boston text-3xl md:text-4xl">
                Delicious Dishes
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our menu and discover our best dishes.
              </p>
            </div>
          </div>
          {items && <ReviewsOrItems items={items} reviews={reviews} />}
        </div>
      </main>
    </>
  );
}
