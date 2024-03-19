"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { FaBurger } from "react-icons/fa6";
import { UserContext } from "../utils/contextProvider";
import styles from "./Navbar.module.css";
import { deleteCookies } from "../utils/deleteCookies";

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

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const path = usePathname();
  const [isOpen, setOpen] = useState(false);

  // useEffect(() => {}, []);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  //   setUserRole("customer");
  //   router.push("/");
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setUserRole("");
  //   localStorage.clear();
  //   router.push("/");
  // };

  async function handleLogout() {
    await deleteCookies();
    window.location.href = "/";
  }

  if (path === "/") return null;

  return (
    <header
      className={`sticky left-0 top-0 z-10 w-full bg-yellow-YUMFINITY text-white-YUMFINITY shadow-lg duration-300 ease-in ${styles.OVERFLOWXHIDDEN} ${isOpen ? styles.openedNavbar : ""}`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-[1366px] items-center justify-between bg-yellow-YUMFINITY md:h-[5.5rem] md:p-4">
        <div>
          <Link href="/">
            <Logo className="h-16 w-14 flex-shrink-0 md:mr-7 md:h-24" />
          </Link>
        </div>
        <div className="flex-shrink-0 font-boston text-3xl text-black-YUMFINITY md:hidden md:translate-x-16 md:text-5xl">
          YUMFINITY
        </div>
        <aside
          className={`peer relative flex text-black-YUMFINITY transition-all duration-300 ${isOpen ? "rotate-[360deg] text-white-YUMFINITY" : ""} md:hidden`}
          onClick={() => setOpen(!isOpen)}
        >
          <label>
            <FaBurger
              className="mx-3 size-10 flex-shrink-0 cursor-pointer rounded-full md:hidden"
              id="burger-menu"
            />
          </label>
        </aside>
        <nav
          className={`absolute right-0 top-[4.5rem] w-full transition-all duration-300 md:top-[5.5rem] ${isOpen ? "-translate-x-0" : "translate-x-full"}`}
        >
          <ul className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-black-YUMFINITY from-70% to-red-YUMFINITY text-white-YUMFINITY">
            {navbarList.map(({ title, href }, index) => {
              if (user && title.includes("Sign")) return null;
              if (!user && title.includes("Profile")) return null;
              return (
                <Link href={href} key={index}>
                  <li
                    className="border-b px-8 py-6 text-2xl hover:bg-slate-800"
                    onClick={() => setOpen(!isOpen)}
                  >
                    {title}
                  </li>
                </Link>
              );
            })}
            {user && (
              <li
                onClick={handleLogout}
                className="border-b px-8 py-6 text-2xl hover:bg-slate-800"
              >
                Logout
              </li>
            )}
          </ul>
        </nav>
        {/*larger screen navigation*/}
        <ul className="mr-auto hidden text-nowrap font-boston uppercase text-white-YUMFINITY md:flex md:text-sm lg:text-[20px]">
          <li className="ml-1 rounded-md px-2 py-1 text-white-YUMFINITY focus:outline-none">
            <Link href="/">Home</Link>
          </li>
          <li className="ml-1 rounded-md px-2 py-1 text-white-YUMFINITY focus:outline-none">
            <Link href="/about">About</Link>
          </li>
          <li className="ml-1 rounded-md px-2 py-1 text-white-YUMFINITY focus:outline-none">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <div className="hidden items-center md:flex">
          {!user && (
            <div className="flex gap-1">
              <Link href={"/SignIn"}>
                <button className="group relative me-1 inline-flex items-center justify-center overflow-hidden rounded-lg bg-red-600 bg-gradient-to-l p-0.5 text-black-YUMFINITY hover:text-white-YUMFINITY focus:outline-none active:bg-black-YUMFINITY">
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
            </div>
          )}

          <ul className="hidden items-center font-boston uppercase text-white-YUMFINITY md:flex md:text-sm lg:text-[20px]">
            {user && (
              <>
                <li>
                  <Link href="/restaurants">
                    <span className="ml-1 rounded-md px-2 py-1 text-white-YUMFINITY focus:outline-none">
                      Restaurants
                    </span>
                  </Link>
                </li>

                <li className="ml-1 rounded-md px-2 py-1 text-white-YUMFINITY focus:outline-none">
                  <Link href={`/profile`}>Profile</Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mx-0.5 rounded-lg bg-red-600 bg-gradient-to-br px-2.5 py-2 text-center font-Roboto text-xl text-white-YUMFINITY hover:bg-red-YUMFINITY focus:outline-none active:bg-black-YUMFINITY"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>

          <button className=" block text-white-YUMFINITY hover:text-gray-300 focus:outline-none md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* <div className="absolute left-0 top-full z-10 hidden w-full bg-yellow-YUMFINITY md:hidden">
            <ul className="py-2">
              <li>
                <Link href="/">
                  <span className="block px-4 py-2 text-white-YUMFINITY hover:bg-red-YUMFINITY">
                    Home
                  </span>
                </Link>
              </li>
              {isLoggedIn && (
                <>
                  <li>
                    <Link href="/restaurants">
                      <span className="block px-4 py-2 text-white-YUMFINITY hover:bg-red-YUMFINITY">
                        Restaurants
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/profile`}>
                      <span className="block px-4 py-2 text-white-YUMFINITY hover:bg-red-YUMFINITY">
                        Profile
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div> */}
      </nav>
    </header>
  );
}
