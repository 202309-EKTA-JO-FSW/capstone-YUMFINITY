"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { TbNumber } from "react-icons/tb";
import styles from "./signup.module.css";
import { UserContext } from "../utils/contextProvider";
import { useRouter } from "next/navigation";
import GoogleSignIn from "../components/GoogleSignIn";

export default function SignUpForm({ submitData }) {
  const { user, setUser } = useContext(UserContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await submitData(formData);
    console.log(result.errors);
    if ((result.message && !result.user) || result.error)
      return setError(result.message || result.error);
    if (result.errors) return setValidationErrors(result.errors);
    if (result.user) {
      setUser(result.user);
      return router.push("/restaurants");
    }
  }

  if (user) return router.push("/restaurants");
  return (
    <form onSubmit={handleSubmit} className="relative">
      {error && (
        <div
          onAnimationEnd={() => setError(null)}
          className={`absolute z-10 rounded-md bg-red-400 py-5 ring-2 ring-red-YUMFINITY ${styles.Error}`}
        >
          <div className="pb-4 pl-10 text-left text-xl font-bold">Error:</div>
          <div className="text-lg md:px-5">{error}</div>
        </div>
      )}
      <div className="mb-10">
        <h3 className=" text-3xl font-extrabold">Sign up</h3>
      </div>
      <div className="mb-10 space-x-4 max-sm:space-y-4 sm:flex sm:items-start">
        <GoogleSignIn />
      </div>
      <div>
        <label className="mb-2 block text-sm">First name</label>
        <div className="relative flex items-center">
          <input
            name="firstName"
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
            name="lastName"
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
        <label className="mb-2 block text-sm">Username</label>
        <div className="relative flex items-center">
          <input
            name="username"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black-YUMFINITY outline-[#FD7014]"
            placeholder="Enter Username"
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
          {validationErrors?.find((err) => err.path === "username") && (
            <div
              onAnimationEnd={() => setValidationErrors(null)}
              className={`absolute -top-8 right-0 flex max-w-[75%] items-end justify-end rounded-lg bg-red-300 p-1 px-2 text-end align-text-bottom text-sm ${styles.ERROR}`}
            >
              • {validationErrors.find((err) => err.path === "username").msg}
            </div>
          )}
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
          {validationErrors?.find((err) => err.path === "email") && (
            <div
              onAnimationEnd={() => setValidationErrors(null)}
              className={`absolute -top-8 right-0 flex max-w-[89%] items-end justify-end rounded-lg bg-red-300 p-1 px-2 text-end align-text-bottom text-sm ${styles.ERROR}`}
            >
              • {validationErrors.find((err) => err.path === "email").msg}
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <label className="mb-2 block text-sm">Phone Number</label>
        <div className="relative flex items-center">
          <input
            name="phoneNumber"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black-YUMFINITY outline-[#FD7014]"
            placeholder="07*1234567"
          />
          <TbNumber className="absolute right-4 h-[20px] w-[20px]" />
          {validationErrors?.find((err) => err.path === "phoneNumber") && (
            <div
              onAnimationEnd={() => setValidationErrors(null)}
              className={`absolute -top-[50px] right-0 flex max-w-[65%] items-end justify-center rounded-lg bg-red-300 p-1 px-2 align-text-bottom text-sm ${styles.ERROR}`}
            >
              • {validationErrors.find((err) => err.path === "phoneNumber").msg}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm">Password</label>
        <div className="relative flex items-center">
          <input
            name="password"
            type={passwordVisible ? "text" : "password"}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black-YUMFINITY outline-[#FD7014]"
            placeholder="Enter password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className={`absolute right-3 size-7 cursor-pointer rounded-full p-1 transition-all hover:bg-slate-300 hover:fill-slate-800 ${passwordVisible ? "bg-yellow-YUMFINITY/20 fill-yellow-YUMFINITY" : ""}`}
            viewBox="0 0 128 128"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            <path
              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
              data-original="#000000"
            ></path>
          </svg>
          {validationErrors?.find((err) => err.path === "password") && (
            <div
              onAnimationEnd={() => setValidationErrors(null)}
              className={`absolute -top-8 right-0 flex max-w-[89%] items-end justify-end rounded-lg bg-red-300 p-1 px-2 text-end align-text-bottom text-sm ${styles.ERROR}`}
            >
              • {validationErrors.find((err) => err.path === "password").msg}
            </div>
          )}
        </div>
      </div>

      <div className="mt-10">
        <button
          type="submit"
          className="w-full rounded bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:bg-orange-600 focus:outline-none active:bg-orange-900"
        >
          Sign up
        </button>
      </div>
      <p className="mt-6 text-center text-sm">
        Already have an account?
        <Link
          href="/SignIn"
          className="ml-1 whitespace-nowrap font-semibold text-[#FD7014] hover:underline"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
