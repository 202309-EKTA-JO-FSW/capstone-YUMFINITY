// import { useEffect, useState } from "react";
import RestaurantCard from "../components/Restaurant/RestaurantCard";

export default function RestaurantsList({ restaurants }) {
  return (
    <article className="my-16 grid gap-10 px-10 md:grid-cols-2 md:px-20 lg:grid-cols-3 xl:grid-cols-4">
      {restaurants?.length > 0 &&
        restaurants.map((res) => <RestaurantCard key={res._id} data={res} />)}
      {(!restaurants || restaurants?.length === 0) && (
        <div className="col-span-2 col-start-2 my-12 w-full text-center font-boston text-3xl">
          No Results
        </div>
      )}
    </article>
  );
}
