import React from "react";
import ViewRestaurants from "./ViewRestaurants";
import ViewItems from "./ViewItems";
import AddRestaurant from "./AddRestaurant";
import AddItem from "./AddItem";

const AdminDashboard = () => {
  return (
    <>
      <ViewRestaurants />
      <ViewItems />
      {/* <AddRestaurant /> */}
      {/* <AddItem /> */}
    </>
  );
};

export default AdminDashboard;
