import Image from "next/image";
import React from "react";
import allRestaurantsHeader from "./allRestaurantsHeader.jpg";
import { FaAnglesDown } from "react-icons/fa6";
import SearchAndList from "./SearchAndList";

async function fetchRestaurants(query) {
  "use server";

  const result = await fetch(
    `https://capstone-room-5.onrender.com/v1/restaurants?${query}`,
  );
  const data = await result.json();
  return data;
}

const Restaurants = async () => {
  return (
    <main>
      <div className="relative flex h-[73vh] max-h-[710px] flex-col items-center justify-start overflow-y-hidden shadow-lg dark:shadow-white/40">
        <Image
          src={allRestaurantsHeader}
          priority={true}
          className="absolute -top-10 -z-10 size-full min-h-[750px] object-cover dark:brightness-90"
          alt="Example"
        />
        <div className="h-full w-full">
          <div className=" flex flex-col items-center px-6 text-center text-black md:px-12">
            <h1 className="mb-4 mt-10 text-4xl font-bold sm:text-5xl">
              Explore Our Restaurants
            </h1>
            <h3 className="mb-4 text-xl sm:text-3xl ">
              Indulge in Speedy Satisfaction with Our Range of Food Options
            </h3>
            <div className="flex items-center gap-3 text-lg">
              Scroll down to browse Restaurants
              <FaAnglesDown className="animate-bounce" />
            </div>
          </div>
          <div className="flex h-full items-center justify-center"></div>
        </div>
      </div>
      <div className="mx-auto my-10 max-w-screen-xl  px-4 ">
        <h2 className="font-b text-center text-2xl sm:text-5xl">
          Search Restaurants
        </h2>
      </div>
      <SearchAndList fetchRestaurants={fetchRestaurants} />
    </main>
  );
};

export default Restaurants;
