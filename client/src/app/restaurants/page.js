import Image from "next/image";
import React from "react";
import allRestaurantsHeader from "./allRestaurantsHeader.jpg";
import { FaAnglesDown } from "react-icons/fa6";

const Restaurants = () => {
  return (
    <div>
      <div className="relative flex h-[73vh] max-h-[710px] flex-col items-center justify-start overflow-y-hidden shadow-lg dark:shadow-white/40">
        <Image
          src={allRestaurantsHeader}
          priority={true}
          className="absolute -top-10 -z-10 size-full min-h-[750px] object-cover dark:brightness-90"
          alt="Example"
        />

        <div className="h-full w-full">
          <div className=" flex flex-col items-center px-6 text-center text-black md:px-12">
            <h1 className="mb-4 mt-10 text-4xl font-bold sm:text-5xl">
              Explore Our Restaurants
            </h1>
            <h3 className="mb-4 text-xl sm:text-3xl ">
              Indulge in Speedy Satisfaction with Our Range of Food Options
            </h3>
            <div className="flex items-center gap-3 text-lg">
              Scroll down to browse Restaurants
              <FaAnglesDown className="animate-bounce" />
            </div>
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
        <div className="flex- w-5/6 rounded-xl bg-white p-6 shadow-lg dark:bg-white/50 dark:shadow-white/45">
          <form>
            <div className="relative mb-6 flex w-full items-center justify-between rounded-md">
              <input
                type="name"
                name="search"
                className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 px-10 py-4 shadow-sm outline-none focus:border-[#FD7014] focus:ring focus:ring-[#FD7014] focus:ring-opacity-50 dark:text-black-YUMFINITY"
                placeholder="Search by name, category, status, etc"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <label
                  htmlFor="manufacturer"
                  className="text-sm font-medium text-stone-600 dark:text-black-YUMFINITY"
                >
                  Category
                </label>

                <select
                  id="manufacturer"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-[#FD7014] focus:ring focus:ring-[#FD7014] focus:ring-opacity-50 dark:text-black-YUMFINITY"
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
                  className="text-sm font-medium text-stone-600 dark:text-black-YUMFINITY"
                >
                  Status
                </label>

                <select
                  id="status"
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-[#FD7014] focus:ring focus:ring-[#FD7014] focus:ring-opacity-50 dark:text-black-YUMFINITY"
                >
                  <option>select</option>
                  <option>open</option>
                  <option>closed</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-[#FD7014] outline-none hover:bg-gray-300 focus:ring">
                Reset
              </button>
              <button className="rounded-lg bg-[#FD7014] px-8 py-2 font-medium text-white outline-none hover:bg-[#eb5d00] focus:ring">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
