import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import React from "react";

const ContactPage = () => {
  return (
    <div className="">
      <div className="h-40 w-full bg-gradient-to-b from-yellow-YUMFINITY to-[#ff8c00ad]">
        <h1 className="mb-6 pt-10 text-center font-boston text-4xl text-white">
          Contact Us
        </h1>
      </div>
      <div className="-mt-10 px-4">
        <div className="relative mx-auto max-w-6xl rounded bg-white-YUMFINITY bg-opacity-60 px-6 py-8 shadow-lg backdrop-blur-lg dark:bg-white-YUMFINITY dark:bg-opacity-60">
          <h2 className=" text-xl text-black-YUMFINITY">Get In Touch</h2>
          <form className="mt-8 grid gap-6 sm:grid-cols-2 *:dark:text-black-YUMFINITY">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded border-2 px-4 py-2.5 text-sm outline-yellow-YUMFINITY dark:bg-white-YUMFINITY"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded border-2 px-4 py-2.5 text-sm outline-yellow-YUMFINITY dark:bg-white-YUMFINITY"
            />
            <input
              type="text"
              placeholder="Phone No."
              className="w-full rounded border-2 px-4 py-2.5 text-sm outline-yellow-YUMFINITY dark:bg-white-YUMFINITY"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded border-2 px-4 py-2.5 text-sm outline-yellow-YUMFINITY dark:bg-white-YUMFINITY"
            />

            <textarea
              placeholder="Message"
              rows="6"
              className="col-span-full w-full rounded border-2 px-4 pt-3 text-sm outline-yellow-YUMFINITY dark:bg-white-YUMFINITY"
            ></textarea>
            <div className="col-span-full flex w-fit items-center">
              <input id="checkbox1" type="checkbox" className="mr-3 h-4 w-4" />
              <label
                htmlFor="checkbox1"
                className="text-sm text-gray-400 dark:text-black-YUMFINITY"
              >
                I agree to the{" "}
                <a href="#" className="underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="button"
              className="flex w-max gap-2 rounded bg-yellow-YUMFINITY px-6 py-3 text-sm font-semibold text-white hover:bg-[#cf5c2e] active:bg-black-YUMFINITY dark:bg-yellow-YUMFINITY dark:active:bg-white-YUMFINITY"
            >
              <RiSendPlaneFill
                className="-ml-2 size-5 dark:invert"
                color="white"
              />
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-12 md:flex-row">
          <div className="flex flex-col items-center justify-center space-y-4">
            <HiOutlineBuildingOffice
              className="size-8"
              color="rgb(241 136 5)"
            />
            <div className="mt-4 text-center">
              <h4 className="text-base font-extrabold">Visit office</h4>
              <p className="tect-gray-400 mt-2 text-sm">Amman, Jordan</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <FiPhoneCall className="size-8" color="rgb(241 136 5)" />
            <div className="mt-4 text-center">
              <h4 className="text-base font-extrabold">Call Us</h4>
              <p className="tect-gray-400 mt-2 text-sm"> +962 798 996 8881 </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <IoChatboxEllipsesOutline
              className="size-8"
              color="rgb(241 136 5)"
            />
            <div className="mt-4 text-center">
              <h4 className="text-base font-extrabold">Send Us Email</h4>
              <a href="mailto:yumfinity@gmail.com" className="mt-2 text-sm">
                yumfinity@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
