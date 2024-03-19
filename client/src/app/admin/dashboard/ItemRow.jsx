import { useContext, useState } from "react";
import EditItem from "./EditItem";
import DeleteDialogBox from "./DeleteDialogBox";
import { RestaurantsContext } from "./Dashboard";

export default function ItemRow({ data }) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [itemData, setItemData] = useState(data);
  const { deleteItem, fetchItems, setItems } = useContext(RestaurantsContext);

  async function handleDelete() {
    const res = await deleteItem(itemData._id);
    if (res) {
      const { items } = await fetchItems(itemData.restaurantID);
      setDeleteOpen(false);
      setItems(items);
    }
  }

  return (
    <>
      <tr className="*:py-2">
        <td className="border-b border-gray-200 px-6">{itemData.title}</td>
        <td className="truncate border-b border-gray-200 px-6">
          {itemData.restaurantID}
        </td>

        <td className="border-b border-gray-200 px-6">{itemData.price}</td>

        <td className="border-b border-gray-200 px-6">
          <td className="whitespace-nowrap px-6 ">
            <button
              onClick={() => setEditOpen(!editOpen)}
              className="focus:shadow-outline-blue rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none active:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => setDeleteOpen(!deleteOpen)}
              className="focus:shadow-outline-red ml-2 rounded-md bg-red-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none active:bg-red-600"
            >
              Delete
            </button>
          </td>
        </td>
      </tr>
      {editOpen && (
        <EditItem
          data={itemData}
          setItemData={setItemData}
          setEditOpen={setEditOpen}
        />
      )}
      {deleteOpen && (
        <DeleteDialogBox
          handleDelete={handleDelete}
          setDeleteOpen={setDeleteOpen}
        />
      )}
    </>
  );
}
