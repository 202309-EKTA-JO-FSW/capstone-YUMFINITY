import React from "react";
import MainPage from "./MainPage";

async function getRestaurantData(id) {
  "use server";

  const res = await fetch(`http://localhost:3001/v1/restaurants/${id}`);
  const data = await res.json();
  return data;
}

const singleRestaurantPage = () => {
  return <MainPage getRestaurantData={getRestaurantData} />;
};

export default singleRestaurantPage;
