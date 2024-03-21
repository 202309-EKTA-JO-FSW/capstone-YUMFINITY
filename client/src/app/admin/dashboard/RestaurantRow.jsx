import { useContext, useState } from "react";
import EditRestaurant from "./EditRestaurant";
import DeleteDialogBox from "./DeleteDialogBox";
import { RestaurantsContext } from "./Dashboard";

export default function RestaurantRow({ data }) {
  const {
    setTab,
    fetchItems,
    setItems,
    deleteRestaurant,
    fetchRestaurants,
    setRestaurants,
    setSelectedRestaurant,
  } = useContext(RestaurantsContext);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [restaurantData, setRestaurantData] = useState(data);

  async function handleViewItems() {
    const { items } = await fetchItems(restaurantData._id);
    setSelectedRestaurant(restaurantData._id);
    setItems(items);
    setTab("Items");
  }

  async function handleDelete() {
    const res = await deleteRestaurant(restaurantData._id);
    if (res) {
      const newRestaurants = await fetchRestaurants();
      setDeleteOpen(false);
      setRestaurants(newRestaurants.results);
    }
  }

  return (
    <>
      <tr className="*:py-2">
        <td className="border-b border-gray-200 px-6">{restaurantData.name}</td>
        <td className="truncate border-b border-gray-200 px-6">
          {restaurantData.category}
        </td>
        <td className="border-b border-gray-200 px-6">
          {restaurantData.phoneNumber}
        </td>
        <td className="flex gap-1 whitespace-nowrap border-b border-gray-200 px-6">
          <button
            onClick={handleViewItems}
            className="focus:shadow-outline-blue rounded-md bg-yellow-YUMFINITY px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none active:bg-blue-600"
          >
            View Items
          </button>
          <button
            onClick={() => setEditOpen(!editOpen)}
            className="focus:shadow-outline-blue rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none active:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteOpen(!deleteOpen)}
            className="focus:shadow-outline-red rounded-md bg-red-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none active:bg-red-600"
          >
            Delete
          </button>
        </td>
      </tr>
      {editOpen && (
        <EditRestaurant
          data={restaurantData}
          setRestaurantData={setRestaurantData}
          setEditOpen={setEditOpen}
        />
      )}
      {deleteOpen && (
        <DeleteDialogBox
          setDeleteOpen={setDeleteOpen}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
