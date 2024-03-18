import Dashboard from "./Dashboard";

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
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: [restaurantID] }),
    },
  );

  if (result.ok) return true;
}

async function deleteItem(itemId) {
  "use server";

  const result = await fetch("http://localhost:3001/v1/admin/item/remove", {
    credentials: "include",
    method: "DELETE",
    headers: {
      Cookie:
        "accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcklkIjoiNjVlOWRjY2E0ODliZDBiYmJjOTI1MTZkIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzEwNzkzMTMxLCJleHAiOjE3MTA3OTQwMzF9.GFMZrW8JUXrT081s28PtRYqvM2CHDwqUaf80C5vMqpc",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids: [itemId] }),
  });

  if (result.ok) return true;
}

const AdminDashboard = () => {
  return (
    <main className="">
      <Dashboard
        fetchRestaurants={fetchRestaurants}
        fetchItems={fetchItems}
        deleteRestaurant={deleteRestaurant}
        deleteItem={deleteItem}
      />
    </main>
  );
};

export default AdminDashboard;
