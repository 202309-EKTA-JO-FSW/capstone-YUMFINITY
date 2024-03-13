import React from "react";
import RestaurantCard from "../components/Restaurant/RestaurantCard";

const AllReastaurant = () => {
  return (
    <div>
      <div className="relative h-[900px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <img src="/allRestaurantsHeader.jpg" alt="Example" />

        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className=" px-6 text-center text-black md:px-12">
            <h1 className="mb-6 mt-20 text-5xl font-bold">
              Explore Our Restaurants
            </h1>
            <h3 className="mb-8 text-3xl ">
              Indulge in Speedy Satisfaction with Our Range of Food Options
            </h3>
          </div>
          <div className="flex h-full items-center justify-center"></div>
        </div>
      </div>
      <div className="mx-auto my-10 max-w-screen-xl  px-4 ">
        <h2 className="font-b text-center text-2xl sm:text-5xl">
          All Restaurants
        </h2>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex- w-5/6  rounded-xl border border-gray-50 bg-white p-6 shadow-lg">
          <form>
            <div className="relative mb-10 flex w-full  items-center justify-between rounded-md">
              <input
                type="name"
                name="search"
                className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pl-12 pr-40 shadow-sm outline-none focus:border-[#FD7014] focus:ring focus:ring-[#FD7014] focus:ring-opacity-50"
                placeholder="Search by name, category, status, etc"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <label
                  htmlFor="manufacturer"
                  className="text-sm font-medium text-stone-600"
                >
                  Category
                </label>

                <select
                  id="manufacturer"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-[#FD7014] focus:ring focus:ring-[#FD7014] focus:ring-opacity-50"
                >
                  <option>select</option>
                  <option>Indian</option>
                  <option>Mid Eastern</option>
                  <option>Italian</option>
                  <option>Asian</option>
                  <option>healthy</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="status"
                  className="text-sm font-medium text-stone-600"
                >
                  Status
                </label>

                <select
                  id="status"
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-[#FD7014] focus:ring focus:ring-[#FD7014] focus:ring-opacity-50"
                >
                  <option>select</option>
                  <option>open</option>
                  <option>closed</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-[#FD7014] outline-none hover:opacity-80 focus:ring">
                Reset
              </button>
              <button className="rounded-lg bg-[#FD7014] px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                Search
              </button>
            </div>
          </form>
        </div>
        <RestaurantCard />
      </div>
    </div>
  );
};

export default AllReastaurant;
