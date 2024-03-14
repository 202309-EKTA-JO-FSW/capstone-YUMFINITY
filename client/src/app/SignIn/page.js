import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="border-b border-black-YUMFINITY text-[#333] lg:border-0 dark:border-white-YUMFINITY">
      <div className="relative grid gap-4 bg-gradient-to-b from-yellow-YUMFINITY to-white-YUMFINITY p-4 pb-14 sm:p-10 lg:grid-cols-2 lg:bg-none dark:to-black-YUMFINITY dark:text-white-YUMFINITY">
        <div>
          <div className="inset-0 -z-10 hidden h-[320px] w-full bg-gradient-to-b from-yellow-YUMFINITY to-white-YUMFINITY pl-12 pt-20 lg:absolute lg:block lg:bg-gradient-to-r dark:to-70%">
            <h3 className="font-boston text-4xl text-white">Welcome back!</h3>
            <p className=" mt-4 w-2/5 text-lg text-white">
              Craving something delicious? Sign in to your account and let us
              get those tasty treats headed your way!
            </p>
          </div>
        </div>
        <div className="dark:bg my-4 h-max w-full max-w-md rounded-xl bg-white px-4 py-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto sm:px-6 dark:bg-orange-950 dark:bg-opacity-35 dark:backdrop-blur-lg">
          <form>
            <div className="mb-10">
              <h3 className=" text-3xl font-extrabold ">Sign in</h3>
            </div>
            <div className="mb-10 space-x-4 max-sm:space-y-4 sm:flex sm:items-start">
              <button
                type="button"
                className="flex items-center rounded bg-orange-100 px-4 py-2.5 text-sm font-semibold text-[#FD7014] transition-all hover:bg-yellow-YUMFINITY hover:text-white-YUMFINITY active:bg-orange-900"
              >
                <FcGoogle size={20} className="mr-3" />
                Continue with Google
              </button>
            </div>
            <div>
              <label className="mb-2 block text-sm">User name</label>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black-YUMFINITY outline-[#FD7014]"
                  placeholder="Enter user name"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="absolute right-4 h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-6">
              <label className="mb-2 block text-sm">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black-YUMFINITY outline-[#FD7014]"
                  placeholder="Enter password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="absolute right-4 h-[18px] w-[18px] cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="button"
                className="w-full rounded bg-orange-400 px-4 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:bg-orange-500 focus:outline-none active:bg-orange-900"
              >
                Log in
              </button>
            </div>
            <p className="mt-6 text-center text-sm">
              Do not have an account{" "}
              <Link
                href="/SignUp"
                className="ml-1 whitespace-nowrap font-semibold text-[#FD7014] hover:underline"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
