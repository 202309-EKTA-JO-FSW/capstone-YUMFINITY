// import Image from "next/image";
import React from "react";
import HoverMe from "./HoverMe";
import ItemCard from "../components/Restaurant/ItemCard";
import Pagination from "./Pagination";

const singleRestaurantPage = () => {
  return (
    <div>
      <main className="flex-1">
        <div className="relative h-[900px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
          <img src="/res.jpg" />

          <div className="top-30 absolute bottom-0 left-0 right-0 h-full w-full overflow-hidden bg-fixed">
            <h1 className="lg:leading-tighter my-20 ml-10 text-xl font-bold tracking-tighter sm:text-xl md:text-xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Welcome to
            </h1>
            <h1 className="lg:leading-tighter my-16 ml-10 text-xl font-bold tracking-tighter sm:text-xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              {/* Restaurant Name */} Delicious Dishes
            </h1>
          </div>
          <div className="mx-auto w-full max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="mb-2 flex w-full flex-col space-y-2 lg:mb-4 lg:flex-row lg:space-x-2 lg:space-y-0">
              <div className="w-full lg:w-1/4">
                <div className="widget w-full rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                      <div className="text-xs font-light uppercase text-gray-500">
                        Type
                      </div>
                      <div className="text-xl font-bold">Indian</div>
                    </div>
                    <svg
                      className="stroke-current text-gray-500"
                      fill="none"
                      height="24"
                      width="24"
                    ></svg>
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
                    <svg
                      className="stroke-current text-gray-500"
                      fill="none"
                      height="24"
                      width="24"
                    ></svg>
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
                    <svg
                      className="stroke-current text-gray-500"
                      fill="none"
                      height="24"
                      width="24"
                    ></svg>
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
                    <svg
                      className="stroke-current text-gray-500"
                      fill="none"
                      height="24"
                      width="24"
                    ></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HoverMe />
        </div>
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Menu
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Delicious Dishes
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our menu and discover our best dishes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3"></div>
          <div className="flex flex-col items-start justify-center gap-4 sm:flex-row">
            <button
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#FD7014] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View Full Menu
            </button>
          </div>
          <ItemCard />
          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default singleRestaurantPage;
