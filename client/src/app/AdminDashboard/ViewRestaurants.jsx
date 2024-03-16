export default function ViewRestaurants() {
  return (
    <div className="mx-4 overflow-hidden rounded-lg shadow-lg md:mx-10">
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
          <tr>
            <td className="border-b border-gray-200 px-6 py-4">
              Bella Cucina Trattoria
            </td>
            <td className="truncate border-b border-gray-200 px-6 py-4">
              Italian
            </td>

            <td className="border-b border-gray-200 px-6 py-4">
              +962794512236
            </td>

            <td className="border-b border-gray-200 px-6 py-4">
              <span className="">
                <td className="whitespace-nowrap px-6 py-4">
                  <button className="focus:shadow-outline-blue rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none active:bg-blue-600">
                    Edit
                  </button>
                  <button className="focus:shadow-outline-red ml-2 rounded-md bg-red-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none active:bg-red-600">
                    Delete
                  </button>
                </td>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 px-6 py-4">
              Spice Delight Bistro
            </td>
            <td className="truncate border-b border-gray-200 px-6 py-4">
              Indian
            </td>

            <td className="border-b border-gray-200 px-6 py-4">
              +962794448966
            </td>

            <td className="border-b border-gray-200 px-6 py-4">
              <span className="">
                <td className="whitespace-nowrap px-6 py-4">
                  <button className="focus:shadow-outline-blue rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none active:bg-blue-600">
                    Edit
                  </button>
                  <button className="focus:shadow-outline-red ml-2 rounded-md bg-red-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none active:bg-red-600">
                    Delete
                  </button>
                </td>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 px-6 py-4">
              Lotus Garden Fusion
            </td>
            <td className="truncate border-b border-gray-200 px-6 py-4">
              Asian
            </td>

            <td className="border-b border-gray-200 px-6 py-4">
              +962794517792
            </td>

            <td className="border-b border-gray-200 px-6 py-4">
              <span className="">
                <td className="whitespace-nowrap px-6 py-4">
                  <button className="focus:shadow-outline-blue rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none active:bg-blue-600">
                    Edit
                  </button>
                  <button className="focus:shadow-outline-red ml-2 rounded-md bg-red-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none active:bg-red-600">
                    Delete
                  </button>
                </td>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
