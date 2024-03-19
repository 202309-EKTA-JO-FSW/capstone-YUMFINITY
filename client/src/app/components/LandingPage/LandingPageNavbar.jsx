"use client";

import Link from "next/link";
import Logo from "../Logo";
import { FaBurger } from "react-icons/fa6";
import styles from "../Navbar.module.css";
import { useContext } from "react";
import { UserContext } from "../../utils/contextProvider";
import { deleteCookies } from "@/app/utils/deleteCookies";

export default function LandingPageNavbar() {
  const { user, setUser } = useContext(UserContext);

  async function handleLogout() {
    await deleteCookies();
    window.location.reload(false);
  }

  const navbarList = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Sign In",
      href: "/SignIn",
    },
    {
      title: "Sign Up",
      href: "/SignUp",
    },
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Restaurants",
      href: "/restaurants",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <header
      className={`relative z-10 flex h-[4.5rem] w-full items-center justify-between bg-yellow-YUMFINITY [box-shadow:_0px_1px_21px_4px_#00000062] md:h-[5.5rem] md:justify-around dark:[box-shadow:_0px_1px_21px_4px_#ffffff62]`}
    >
      <Link href={"/"}>
        <Logo className="h-16 w-14 flex-shrink-0 md:h-24" />
      </Link>
      <div
        className={`flex-shrink-0 font-boston text-3xl md:text-5xl ${user?.isAdmin ? "md:translate-x-20" : "md:translate-x-16"}`}
      >
        YUMFINITY
      </div>
      <aside className="peer relative flex transition-all duration-300 has-[:checked]:rotate-[360deg] has-[:checked]:text-white-YUMFINITY md:hidden">
        <input
          type="checkbox"
          name="burger-menu"
          id="burger-menu-toggle"
          className={`${styles["burger-menu"]} absolute inset-0 size-0`}
        />
        <label htmlFor="burger-menu-toggle">
          <FaBurger
            className="mx-3 size-10 flex-shrink-0 cursor-pointer rounded-full md:hidden"
            id="burger-menu"
          />
        </label>
      </aside>
      <div className="absolute right-0 top-[4.5rem] w-full translate-x-full transition-all duration-300 peer-has-[:checked]:-translate-x-0 md:top-[5.5rem]">
        <ul className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-black-YUMFINITY from-70% to-red-YUMFINITY text-white-YUMFINITY">
          {navbarList.map(({ title, href }, index) => {
            if (user && title.includes("Sign")) return null;
            if (!user && title.includes("Profile")) return null;
            return (
              <Link href={href} key={index}>
                <li className="border-b px-8 py-6 text-2xl hover:bg-slate-800">
                  {title}
                </li>
              </Link>
            );
          })}
          {user && (
            <li
              className="border-b px-8 py-6 text-2xl hover:bg-slate-800"
              onClick={handleLogout}
            >
              Logout
            </li>
          )}
        </ul>
      </div>
      <div className="hidden flex-shrink-0 items-center md:flex">
        {!user && (
          <>
            <Link href={"/SignIn"}>
              <button className="group relative me-1 inline-flex items-center justify-center overflow-hidden rounded-lg bg-red-600 bg-gradient-to-l p-0.5 hover:text-white-YUMFINITY focus:outline-none active:bg-black-YUMFINITY">
                <span className="relative rounded-md bg-white-YUMFINITY px-2.5 py-1.5 text-xl transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-black-YUMFINITY">
                  Sign In
                </span>
              </button>
            </Link>
            <Link href={"/SignUp"}>
              <button
                type="button"
                className=" mx-0.5 rounded-lg bg-red-600 bg-gradient-to-br px-2.5 py-2 text-center text-xl text-white-YUMFINITY hover:bg-red-YUMFINITY focus:outline-none active:bg-black-YUMFINITY"
              >
                Sign Up
              </button>
            </Link>
          </>
        )}
        {user && (
          <>
            <Link href={user?.isAdmin ? "/admin/dashboard" : "/profile"}>
              <button className="group relative me-1 inline-flex items-center justify-center overflow-hidden rounded-lg bg-red-600 bg-gradient-to-l p-0.5 hover:text-white-YUMFINITY focus:outline-none active:bg-black-YUMFINITY">
                <span className="relative rounded-md bg-white-YUMFINITY px-2.5 py-1.5 text-xl transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-black-YUMFINITY">
                  {user?.isAdmin ? "Dashboard" : "Profile"}
                </span>
              </button>
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className=" mx-0.5 rounded-lg bg-red-600 bg-gradient-to-br px-2.5 py-2 text-center text-xl text-white-YUMFINITY hover:bg-red-YUMFINITY focus:outline-none active:bg-black-YUMFINITY"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}
