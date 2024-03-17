import React from "react";
import ViewRestaurants from "./ViewRestaurants";
import ViewItems from "./ViewItems";
import AddRestaurant from "./AddRestaurant";
import AddItem from "./AddItem";
import EditRestaurant from "./EditRestaurant";
import EditItem from "./EditItem";

const AdminDashboard = () => {
  return (
    <>
      <header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Restaurants
        </h1>
      </header>
      <ViewRestaurants />

      <h1 class="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Items
      </h1>
      <ViewItems />

      <div className="mt-28 flex flex-col gap-10 px-3 lg:grid lg:grid-cols-2 lg:justify-between lg:px-20">
        <AddRestaurant />
        <AddItem />
        {/* <EditRestaurant />
        <EditItem /> */}
      </div>
    </>
  );
};

export default AdminDashboard;
