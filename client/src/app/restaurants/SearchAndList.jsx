"use client";

import { useEffect, useState } from "react";
import RestaurantsList from "./RestaurantsList";
import SearchRestaurants from "./SearchRestaurants";
import { useSearchParams } from "next/navigation";

export default function SearchAndList({ fetchRestaurants }) {
  const [restaurantList, setRestaurantList] = useState([]);
  const path = useSearchParams();

  // Fetch restaurants when the page loads. If there is a search query in the URL, fetch based on that instead of all
  async function getRestaurants() {
    const location = path.get("location");
    if (location) {
      const { results } = await fetchRestaurants(`loc=${location}`);
      return setRestaurantList(results);
    }
    const { results } = await fetchRestaurants();
    setRestaurantList(results);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const category = formData.get("category");
    const newList = await fetchRestaurants(`name=${name}&category=${category}`);
    setRestaurantList(newList.results);
  }

  async function handleReset() {
    getRestaurants();
  }

  return (
    <>
      <SearchRestaurants
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <RestaurantsList restaurants={restaurantList} />
    </>
  );
}
