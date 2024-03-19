import { useEffect, useRef, useState } from "react";

export default function JoinTeam() {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(ref.current);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`flex h-full items-center justify-center  dark:bg-gray-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="p-6">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center rounded-xl border border-gray-200 bg-white p-5 text-left md:p-8 lg:flex-nowrap dark:border-gray-700">
          <div className="mb-5 w-full flex-1 md:mb-0 md:w-1/2 md:pr-5 lg:pr-10">
            <h3 className="mb-2 font-boston text-2xl text-gray-700 dark:text-gray-200">
              Join Yumfinity Team
            </h3>
            <p className="text-gray-500 dark:text-gray-400 ">
              Provide your email to get email notification when we launch new
              jobs or publish new opportunities.
            </p>
          </div>
          <div className="flex-0 w-full px-1 md:w-auto lg:w-1/2">
            <form>
              <input type="hidden" name="tags" value="earlyaccess" />
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 sm:mr-5 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                />
                <button
                  type="submit"
                  className="mt-5 w-full whitespace-nowrap rounded-md bg-[#FD7014] px-6 py-4 text-lg text-white sm:mt-0 sm:w-auto dark:bg-gray-900"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
