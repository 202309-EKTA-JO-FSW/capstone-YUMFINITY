import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="border-b border-black-YUMFINITY text-[#333] lg:h-[60vh] lg:border-0 dark:border-white-YUMFINITY">
      <div className="grid gap-4 bg-gradient-to-b from-yellow-YUMFINITY to-white-YUMFINITY p-4 pb-14 sm:p-10 lg:h-[320px] lg:grid-cols-2 lg:bg-gradient-to-r dark:to-black-YUMFINITY dark:to-70% dark:text-white-YUMFINITY">
        <div>
          <div className="mt-16 max-w-lg px-6 max-lg:hidden">
            <h3 className=" font-boston text-4xl text-white">Welcome back!</h3>
            <p className=" mt-4 text-lg text-white">
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import React from "react";

const SignIn = () => {
  return (
    <div className="font-boston text-[#333]">
      <div className="grid h-[320px] gap-4 bg-gradient-to-r from-[#FD7014] to-white p-4 sm:p-8 lg:grid-cols-2">
        <div>
          <div className="mt-16 max-w-lg px-6 max-lg:hidden">
            <h3 className=" text-3xl font-bold text-white">Welcome back!</h3>
            <p className=" mt-4 text-sm text-white">
              Craving something delicious? Sign in to your account and let us
              get those tasty treats headed your way!
            </p>
          </div>
        </div>
        <div className="dark:bg my-4 h-max w-full max-w-md rounded-xl bg-white px-4 py-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto sm:px-6 dark:bg-orange-950 dark:bg-opacity-35 dark:backdrop-blur-lg">
          <form>
            <div className="mb-10">
              <h3 className=" text-3xl font-extrabold ">Sign in</h3>

        <div className="my-4 h-max w-full max-w-md rounded-xl bg-white px-4 py-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto sm:px-6">
          <form>
            <div className="mb-10">
              <h3 className=" text-3xl font-extrabold text-[#FD7014]">
                Sign in
              </h3>
            </div>
            <div className="mb-10 space-x-4 max-sm:space-y-4 sm:flex sm:items-start">
              <button
                type="button"
                className="flex items-center rounded bg-orange-100 px-4 py-2.5 text-sm font-semibold text-[#FD7014] transition-all hover:bg-yellow-YUMFINITY hover:text-white-YUMFINITY active:bg-orange-900"
              >
                <FcGoogle size={20} className="mr-3" />
                className="rounded bg-orange-50 px-4 py-2.5 text-sm font-semibold text-[#FD7014] hover:bg-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  className="mr-4 inline"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg>
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

                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-[#FD7014]"
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
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-[#FD7014]"
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
                className="w-full rounded bg-[#FD7014] px-4 py-2.5 text-sm font-semibold text-white shadow-xl hover:bg-orange-400 focus:outline-none"
              >
                Log in
              </button>
            </div>
            <p className="mt-6 text-center text-sm">
              Do not have an account{" "}
              <a
                href="javascript:void(0);"
                className="ml-1 whitespace-nowrap font-semibold text-[#FD7014] hover:underline"
              >
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
