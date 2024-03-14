import React from "react";

const SignUp = () => {
  return (
    <div className="text-[#333]">
      <div className="relative grid gap-4 bg-gradient-to-b from-yellow-YUMFINITY to-white-YUMFINITY p-4 pb-14 sm:p-10 lg:grid-cols-2 lg:bg-none dark:to-black-YUMFINITY dark:text-white-YUMFINITY">
        <div>
          <div className="inset-0 -z-10 hidden w-full bg-gradient-to-b from-yellow-YUMFINITY to-white-YUMFINITY pl-12 pt-20 lg:absolute lg:block lg:h-[390px] lg:bg-gradient-to-r xl:h-[360px] dark:to-70%">
            <h3 className=" w-2/5 font-boston  text-3xl text-white">
              Let us get started!
            </h3>
            <p className=" mt-4 w-2/5 text-lg text-white">
              Become a registered user and unlock the full flavor experience.
              Fill out the details below to create your account and embark on a
              delicious journey with us. From mouthwatering meals to delightful
              deals, we have got it all. Let us make your food cravings a
              reality! Welcome to Yumfinity
            </p>
          </div>
        </div>
        <div className="dark:bg my-4 h-max w-full max-w-md rounded-xl bg-white px-4 py-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto sm:px-6 dark:bg-orange-950 dark:bg-opacity-35 dark:backdrop-blur-lg">
          <form>
            <div className="mb-10">
              <h3 className=" text-3xl font-extrabold">Sign up</h3>
            </div>
            <div>
              <label className="mb-2 block text-sm">First name</label>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black-YUMFINITY outline-[#FD7014]"
                  placeholder="Enter first name"
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
              <label className="mb-2 block text-sm">Last name</label>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black-YUMFINITY outline-[#FD7014]"
                  placeholder="Enter last name"
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
              <label className="mb-2 block text-sm">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black-YUMFINITY outline-[#FD7014]"
                  placeholder="example@domain.com"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="absolute right-4 h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                >
                  <svg
                    className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                  </svg>
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
                className="w-full rounded bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:bg-orange-600 focus:outline-none active:bg-orange-900"
              >
                Sign up
              </button>
            </div>
            <p className="mt-6 text-center text-sm">
              Already have an account?
              <a
                href="#"
                className="ml-1 whitespace-nowrap font-semibold text-[#FD7014] hover:underline"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
