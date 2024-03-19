import { useContext } from "react";
import ItemRow from "./ItemRow";
import { RestaurantsContext } from "./Dashboard";

export default function ViewItems() {
  const { items } = useContext(RestaurantsContext);

  return (
    <div className="mx-4 my-10 overflow-hidden rounded-lg shadow-lg md:mx-10">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/4 px-6 py-4 text-left font-bold uppercase text-gray-600">
              Name
            </th>
            <th className="w-1/4 px-6 py-4 text-left font-bold uppercase text-gray-600">
              Restaurant ID
            </th>
            <th className="w-1/4 px-6 py-4 text-left font-bold uppercase text-gray-600">
              Price
            </th>
            <th className="w-1/4 px-6 py-4 text-left font-bold uppercase text-gray-600">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {items.map((item) => (
            <ItemRow key={item._id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}