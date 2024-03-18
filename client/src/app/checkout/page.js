import React from "react";

const Checkout = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#FD7014]">
        <div className="mx-auto w-full max-w-3xl p-8">
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <h1 className="mb-2 border-b-2 border-gray-400 pb-2 font-boston text-4xl font-bold leading-tight text-gray-900">
              Checkout
            </h1>
            <p className="mb-8 text-lg text-gray-800">One Last Step!</p>
          </div>
          <div className="rounded-lg border bg-white p-8 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-[#333]">
                  Choose your payment method
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="h-5 w-5 cursor-pointer"
                      id="card"
                      checked
                    />
                    <label className="ml-4 flex cursor-pointer gap-2">
                      Cash on delivery
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="h-5 w-5 cursor-pointer"
                      id="paypal"
                    />
                    <label
                      htmlFor="paypal"
                      className="ml-4 flex cursor-pointer gap-2"
                    >
                      <img
                        src="https://readymadeui.com/images/paypal.webp"
                        className="w-20"
                        alt="paypalCard"
                      />
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="h-5 w-5 cursor-pointer"
                      id="card"
                      checked
                    />
                    <label
                      htmlFor="card"
                      className="ml-4 flex cursor-pointer gap-2"
                    >
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="card1"
                      />
                      <img
                        src="https://readymadeui.com/images/american-express.webp"
                        className="w-12"
                        alt="card2"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="card3"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px] bg-white">
                <form>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#FD7014] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@domain.com"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#FD7014] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="subject"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="card_number"
                      id="card_number"
                      placeholder="**** **** **** 1234"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#FD7014] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="subject"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      name="expiration_date"
                      id="expiration_date"
                      placeholder="MM / YY"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#FD7014] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Type your special requests or substitutions in orders"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#FD7014] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div>
                    <button className="hover:shadow-form rounded-md bg-[#FD7014] px-8 py-3 text-base font-semibold text-white outline-none">
                      confirm payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
