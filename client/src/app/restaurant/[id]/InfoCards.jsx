import Image from "next/image";
import background from "./background.jpg";

export default function InfoCards({ info }) {
  return (
    <div className="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat">
      <Image
        alt=""
        src={background}
        className="-z-10 shadow-lg dark:brightness-90"
      />
      <div className="absolute left-0 top-0 w-full overflow-hidden bg-fixed">
        <h1 className="my-9 ml-7 w-3/5 font-boston text-sm text-black-YUMFINITY sm:my-20 sm:ml-10 sm:text-lg md:text-3xl md:leading-snug xl:text-[2.75rem] 2xl:text-[3.25rem]">
          Welcome to <br />
          {info.name}
          <br />
          Restaurant
        </h1>
      </div>
      <div className="z-10 mx-auto w-full max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="mb-2 flex w-full flex-col space-y-2 px-1.5 lg:mb-4 lg:flex-row lg:space-x-2 lg:space-y-0">
          <div className="w-full lg:w-1/4">
            <div className="widget w-full rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs font-light uppercase text-gray-500">
                    Category
                  </div>
                  <div className="text-xl font-bold">{info.category}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="widget w-full rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
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
            <div className="widget w-full rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs font-light uppercase text-gray-500">
                    Phone no.
                  </div>
                  <div className="text-xl font-bold">{info.phoneNumber}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4">
            <div className="widget w-full rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
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
    </div>
  );
}
