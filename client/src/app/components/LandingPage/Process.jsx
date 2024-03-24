export default function Process() {
  return (
    <div className="mx-5 flex flex-col justify-center md:mx-0 dark:text-black-YUMFINITY">
      <div className="w-full">
        <div className="container mx-auto mt-32 flex flex-col items-center gap-16">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-dark-grey-900 mb-2 font-boston text-3xl leading-tight lg:text-4xl dark:text-white">
                How
                <span className="relative mx-1 inline-block stroke-current font-boston text-4xl text-[#FD7014]">
                  YUMFINITY
                  <svg
                    className="absolute -bottom-0.5 max-h-1.5 w-full"
                    viewBox="0 0 55 5"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </span>
                works?
              </h2>
              <p className="text-dark-grey-600 text-base font-medium leading-7 dark:text-white">
                Effortless Ordering: A Seamless Journey from Selection to
                Satisfaction
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
            <div className="flex items-start gap-4 rounded-xl bg-white px-10 py-14 shadow-lg">
              <div className="flex flex-col">
                <h3 className="text-dark-grey-900 mb-2 text-base font-bold leading-tight">
                  Browse & Select{" "}
                </h3>
                <p className="text-dark-grey-600 text-base font-medium leading-7">
                  Explore restaurants and menus, add items to your cart.
                </p>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
              >
                <g clipPath="url(#clip0_3346_6663)">
                  <path
                    d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                    fill="#68769F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3346_6663">
                    <rect
                      width="42"
                      height="42"
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-white px-10 py-14 shadow-lg">
              <div className="flex flex-col">
                <h3 className="text-dark-grey-900 mb-2 text-base font-bold leading-tight">
                  Customize & Checkout{" "}
                </h3>
                <p className="text-dark-grey-600 text-base font-medium leading-7">
                  Personalize orders, provide delivery details, and pay.{" "}
                </p>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
              >
                <g clipPath="url(#clip0_3346_6663)">
                  <path
                    d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                    fill="#68769F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3346_6663">
                    <rect
                      width="42"
                      height="42"
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-white px-10 py-14 shadow-lg">
              <div className="flex flex-col">
                <h3 className="text-dark-grey-900 mb-2 text-base font-bold leading-tight">
                  Confirm & Enjoy
                </h3>
                <p className="text-dark-grey-600 text-base font-medium leading-7">
                  Receive order confirmation, await food arrival enjoy your meal
                  upon arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
