// import Image from "next/image";
import React from "react";
// import HoverMe from "./HoverMe";
// import Pagination from "./Pagination";
import background from "./background.jpg";
import Image from "next/image";
import ReviewsOrItems from "./ReviewsOrItems";

const singleRestaurantPage = () => {
  return (
    <main className="">
      <div className="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <Image alt="" src={background} className="-z-10" />
        <div className="absolute left-0 top-0 w-full overflow-hidden bg-fixed">
          <h1 className="my-9 ml-7 font-boston text-sm text-black-YUMFINITY sm:my-20 sm:ml-10 sm:text-lg md:text-3xl md:leading-snug xl:text-[2.75rem] 2xl:text-[3.25rem]">
            Welcome to <br />
            {/* Restaurant Name */} Delicious Dishes
            <br />
            Restaurant
          </h1>
        </div>
        <div className="z-10 mx-auto w-full max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="mb-2 flex w-full flex-col space-y-2 px-1.5 lg:mb-4 lg:flex-row lg:space-x-2 lg:space-y-0">
            <div className="w-full lg:w-1/4">
              <div className="widget w-full rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-xs font-light uppercase text-gray-500">
                      Type
                    </div>
                    <div className="text-xl font-bold">Indian</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4">
              <div className="widget w-full rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-xs font-light uppercase text-gray-500">
                      Location
                    </div>
                    <div className="text-xl font-bold">Amman-Mecca St.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/4">
              <div className="widget w-full rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-xs font-light uppercase text-gray-500">
                      Phone no.
                    </div>
                    <div className="text-xl font-bold">056214789</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/4">
              <div className="widget w-full rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-xs font-light uppercase text-gray-500">
                      Working hours
                    </div>
                    <div className="text-xl font-bold">10 AM - 11 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <HoverMe /> */}
      </div>
      <div className="space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Our Menu
            </div>
            <h2 className="font-boston text-3xl md:text-4xl">
              Delicious Dishes
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our menu and discover our best dishes.
            </p>
          </div>
        </div>

        <ReviewsOrItems />
      </div>
    </main>
  );
};

export default singleRestaurantPage;
