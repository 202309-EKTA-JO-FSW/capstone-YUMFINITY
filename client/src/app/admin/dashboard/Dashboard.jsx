"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import ViewRestaurants from "./ViewRestaurants";
import ViewItems from "./ViewItems";
import AddRestaurant from "./AddRestaurant";
import AddItem from "./AddItem";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/utils/contextProvider";

export const RestaurantsContext = createContext(null);

export default function Dashboard({
  fetchRestaurants,
  fetchItems,
  deleteRestaurant,
  deleteItem,
  updateRestaurant,
  updateItem,
  createRestaurant,
  createItem,
}) {
  const [tab, setTab] = useState("Restaurants");
  const [createOpen, setCreateOpen] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const { user } = useContext(UserContext);
  const router = useRouter();

  async function setRestaurantsState() {
    const data = await fetchRestaurants();
    setRestaurants(data.results);
  }

  useEffect(() => {
    setRestaurantsState();
  }, []);

  if (!user || !user?.isAdmin) return router.push("/");

  return (
    <RestaurantsContext.Provider
      value={{
        fetchRestaurants,
        fetchItems,
        restaurants,
        setTab,
        items,
        setItems,
        deleteRestaurant,
        setRestaurants,
        deleteItem,
        updateRestaurant,
        updateItem,
        createRestaurant,
        createItem,
        setCreateOpen,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      <header>
        <div className="flex border-b border-yellow-YUMFINITY">
          <h1
            onClick={() => setTab("Restaurants")}
            className={`w-1/2 cursor-pointer border-r border-yellow-YUMFINITY py-4 text-center text-3xl font-extrabold tracking-tight text-slate-900 hover:bg-slate-400 sm:text-4xl ${tab === "Restaurants" ? "bg-slate-300" : ""}`}
          >
            Restaurants
          </h1>
          <h1
            onClick={() => setTab("Items")}
            className={`w-1/2 cursor-pointer py-4 text-center text-3xl font-extrabold tracking-tight text-slate-900 hover:bg-slate-400 sm:text-4xl ${tab === "Items" ? "bg-slate-300" : ""}`}
          >
            Items
          </h1>
        </div>
        <div className="mx-10 my-3 flex justify-end">
          <button
            type="button"
            onClick={() => setCreateOpen(!createOpen)}
            className="rounded-lg bg-yellow-YUMFINITY p-3 font-bold text-white transition-all hover:bg-orange-700 active:bg-orange-900"
          >
            Create New {tab.slice(0, -1)}
          </button>
        </div>
      </header>
      {tab === "Restaurants" && createOpen && (
        <AddRestaurant setCreateOpen={setCreateOpen} />
      )}
      {tab === "Items" && createOpen && (
        <AddItem setCreateOpen={setCreateOpen} />
      )}

      {tab === "Restaurants" && <ViewRestaurants />}

      {tab === "Items" && <ViewItems />}
    </RestaurantsContext.Provider>
  );
}
