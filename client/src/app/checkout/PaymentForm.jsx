"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdFastfood } from "react-icons/md";
import styles from "./form.module.css";

export default function PaymentForm({ submitOrder }) {
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const fields = {
      totalBill: parseFloat(data.get("totalBill")),
      totalPayment: parseFloat(data.get("totalBill")),
      specialOrderRequirement: data.get("specialOrderRequirement"),
      paymentMethod: data.get("paymentMethod"),
      location: [33.154, 36.167],
    };
    const order = await submitOrder(fields);
    if (order) {
      if (order.message) setError(order.message);
      setCompleted(true);
      setTimeout(() => {
        order.message ? router.push("/profile") : router.push("/restaurants");
      }, 2500);
    }
  }
  return (
    <div>
      <div className="mx-auto mt-20 w-full max-w-3xl p-8">
        <div className="rounded-lg border bg-white p-8 shadow-md dark:border-gray-700 dark:bg-gray-800">
          <div className="lg:col-span-2">
            <h3 className="font-boston text-2xl">Payment Details</h3>
          </div>
          <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white dark:bg-gray-800">
              <form onSubmit={handleSubmit} id="payment">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-medium"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="**** **** **** 1234"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-medium"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    name="expiration_date"
                    id="expiration_date"
                    placeholder="MM / YY"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium"
                  >
                    Order Note
                  </label>
                  <textarea
                    rows="4"
                    name="specialOrderRequirement"
                    id="specialOrderRequirement"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="rounded-md bg-[#FD7014] px-8 py-3 font-boston text-base text-white outline-none hover:bg-orange-600 active:bg-orange-800">
                    Submit order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {completed && !error && (
        <div
          className={`${styles.completed} fixed inset-0 flex items-center justify-center bg-black-YUMFINITY/35`}
        >
          <div
            className={`${styles.pop} mx-6 flex size-fit flex-col items-center justify-center rounded-lg bg-yellow-YUMFINITY/80 px-8 py-10 text-center font-boston shadow-xl ring-2 ring-red-YUMFINITY backdrop:blur-xl md:flex-row`}
          >
            Thank you for ordering with us!
            <br />
            your order is set, we hope you enjoy it
            <br />
            <MdFastfood className="ml-5 size-12 fill-red-YUMFINITY" />
          </div>
        </div>
      )}
      {completed && error && (
        <div
          className={`${styles.completed} fixed inset-0 flex items-center justify-center bg-black-YUMFINITY/35`}
        >
          <div
            className={`${styles.pop} mx-6 flex size-fit flex-col items-center justify-center rounded-lg bg-yellow-YUMFINITY/80 px-8 py-10 text-center font-boston shadow-xl ring-2 ring-red-YUMFINITY backdrop:blur-xl md:flex-row`}
          >
            {error}
          </div>
        </div>
      )}
    </div>
  );
}
