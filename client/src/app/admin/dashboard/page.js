import { cookies } from "next/headers";
import Dashboard from "./Dashboard";
import { refreshAccessToken } from "@/app/utils/refreshAccessToken";

async function fetchRestaurants() {
  "use server";

  const result = await fetch("http://localhost:3001/v1/restaurants");
  const data = await result.json();
  return data;
}

async function fetchItems(restaurantID) {
  "use server";

  const result = await fetch(
    `http://localhost:3001/v1/restaurants/${restaurantID}`,
  );
  const data = await result.json();
  return data;
}

async function deleteRestaurant(restaurantID) {
  "use server";

  const result = await fetch(
    `http://localhost:3001/v1/admin/restaurant/remove`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({ ids: [restaurantID] }),
    },
  );
  const data = await result.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await deleteRestaurant(restaurantID); // Recursively call the function with the new token
  }

  if (result.ok) return true;
}

async function deleteItem(itemId) {
  "use server";

  const result = await fetch("http://localhost:3001/v1/admin/item/remove", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    body: JSON.stringify({ ids: [itemId] }),
  });
  const data = await result.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await deleteItem(itemId); // Recursively call the function with the new token
  }

  if (result.ok) return true;
}

async function updateRestaurant(updateFields, restaurantID) {
  "use server";

  const result = await fetch(
    `http://localhost:3001/v1/admin/restaurant/update/${restaurantID}`,
    {
      method: "PATCH",
      headers: {
        Cookie: cookies().toString(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFields),
    },
  );
  const data = await result.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await updateRestaurant(updateFields, restaurantID); // Recursively call the function with the new token
  }

  if (result.ok) return data;
}

async function updateItem(updateFields, itemId) {
  "use server";

  const result = await fetch(
    `http://localhost:3001/v1/admin/item/update/${itemId}`,
    {
      method: "PATCH",
      headers: {
        Cookie: cookies().toString(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFields),
    },
  );
  const data = await result.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await updateItem(updateFields, itemId); // Recursively call the function with the new token
  }

  if (result.ok) return data;
}

const AdminDashboard = () => {
  return (
    <main className="">
      <Dashboard
        fetchRestaurants={fetchRestaurants}
        fetchItems={fetchItems}
        deleteRestaurant={deleteRestaurant}
        deleteItem={deleteItem}
        updateRestaurant={updateRestaurant}
        updateItem={updateItem}
      />
    </main>
  );
};

export default AdminDashboard;
