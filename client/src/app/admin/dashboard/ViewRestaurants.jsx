import { useContext } from "react";
import RestaurantRow from "./RestaurantRow";
import { RestaurantsContext } from "./Dashboard";

export default function ViewRestaurants() {
  const { restaurants } = useContext(RestaurantsContext);

  return (
    restaurants.length && (
      <div className="mx-4 my-10 overflow-hidden rounded-lg shadow-lg md:mx-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 px-6 py-4 text-left font-bold uppercase text-gray-600">
                Name
              </th>
              <th className="w-1/4 px-6 py-4 text-left font-bold uppercase text-gray-600">
                Type
              </th>
              <th className="w-1/4 px-6 py-4 text-left font-bold uppercase text-gray-600">
                Phone
              </th>
              <th className="w-1/4 px-6 py-4 text-left font-bold uppercase text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {restaurants.map((restaurant) => (
              <RestaurantRow key={restaurant._id} data={restaurant} />
            ))}
          </tbody>
        </table>
      </div>
    )
  );
}
