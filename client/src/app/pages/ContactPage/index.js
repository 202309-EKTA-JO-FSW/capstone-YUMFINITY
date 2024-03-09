import React from "react";

const ContactPage = () => {
  return (
    <div className="font-boston">
      <div className="h-40 w-full bg-gradient-to-r from-[#FD7014] to-orange-300">
        <h1 className="mt-20 pt-10 text-center text-3xl font-bold text-white">
          Contact Us
        </h1>
      </div>
      <div className="-mt-14 mb-6 px-4">
        <div className="relative mx-auto max-w-6xl rounded bg-white px-6 py-8 shadow-lg">
          <h2 className=" font-boston text-xl font-bold text-[#333]">
            Get In Touch
          </h2>
          <form className="mt-8 grid gap-6 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded border-2 px-4 py-2.5 text-sm outline-[#FD7014]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded border-2 px-4 py-2.5 text-sm outline-[#FD7014]"
            />
            <input
              type="email"
              placeholder="Phone No."
              className="w-full rounded border-2 px-4 py-2.5 text-sm outline-[#FD7014]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded border-2 px-4 py-2.5 text-sm outline-[#FD7014]"
            />

            <textarea
              placeholder="Message"
              rows="6"
              className="col-span-full w-full rounded border-2 px-4 pt-3 text-sm outline-[#FD7014]"
            ></textarea>
            <div className="col-span-full flex items-center">
              <input id="checkbox1" type="checkbox" className="mr-3 h-4 w-4" />
              <label htmlFor="checkbox1" className="text-sm text-gray-400">
                I agree to the{" "}
                <a href="javascript:void(0);" className="underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="javascript:void(0);" className="underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="button"
              className=" w-max rounded bg-[#FD7014] px-6 py-3 font-boston text-sm font-semibold text-white hover:bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2 inline"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <div className="mt-4 text-center">
            <h4 className="text-base font-extrabold text-[#333]">
              Visit office
            </h4>
            <p className="tect-gray-400 mt-2 text-sm"> Amman, Jordan</p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-[#FD7014]"
            viewBox="0 0 473.806 473.806"
          >
            <path
              d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
              data-original="#000000"
            ></path>
          </svg>
          <div className="mt-4 text-center">
            <h4 className="text-base font-extrabold text-[#333]">Call us</h4>
            <p className="tect-gray-400 mt-2 text-sm"> +962 798 996 8881 </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-[#FD7014]"
            viewBox="0 0 32 32"
          >
            <path
              d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z"
              data-original="#000000"
            ></path>
            <path
              d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z"
              data-original="#000000"
            ></path>
          </svg>
          <div className="mt-4 text-center">
            <h4 className="text-base font-extrabold text-[#333]">Chat to us</h4>
            <p className="tect-gray-400 mt-2 text-sm">yumfinity@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-[#FD7014]"
            viewBox="0 0 100 100"
          >
            <path
              d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
