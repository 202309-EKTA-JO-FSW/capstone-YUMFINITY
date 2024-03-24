"use client";

import { BsCartCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

export default function PastOrderCard({ className, order }) {
  function handleReviewSubmit(e) {
    e.preventDefault();
    return;
  }

  return (
    <div
      className={`mx-4 flex flex-col gap-6 border-b-2 border-red-YUMFINITY pt-4 *:border-b *:border-black-YUMFINITY *:pb-3 lg:grid lg:grid-cols-2 ${className}`}
    >
      <fieldset>
        <div className="text-lg font-bold">Order Date</div>
        <div className="text-lg">
          {order.orderDate.toLocaleDateString("en-US")}
        </div>
      </fieldset>
      {/* <fieldset>
        <div className="text-lg font-bold">Delivery Address</div>
        <div className="text-lg">{}</div>
      </fieldset> */}
      <fieldset>
        <div className="text-lg font-bold">Restaurant</div>
        <div className="text-lg">{order.restaurantId}</div>
      </fieldset>
      <fieldset>
        <div className="text-lg font-bold">Payment</div>
        <div className="flex flex-col gap-2">
          <div>Payment Method: {order.payment.paymentMethod}</div>
          <div>Total Payment: {order.payment.totalPayment}</div>
        </div>
      </fieldset>
      <fieldset>
        <div className="text-lg font-bold">Order Note</div>
        <div className="text-lg">{order.specialOrderRequirement}</div>
      </fieldset>
      {order.review.length === 0 && (
        <form onSubmit={handleReviewSubmit} className="lg:col-span-2">
          <div className="text-lg font-bold">Submit Your Review</div>
          <div className="flex flex-wrap items-center justify-between gap-3 text-lg xl:flex-nowrap">
            <input
              type="text"
              className="h-8 w-full rounded-sm bg-slate-100 px-2 text-black-YUMFINITY/80 ring-2 ring-orange-200"
              name="comment"
              id="comment"
              placeholder="Enter your comment"
            />
            <select
              className="max-w-fit rounded-md bg-slate-200 px-2 py-1.5 text-black-YUMFINITY/80"
              id="rating"
              name="rating"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="rounded-lg bg-red-700/75 px-2 py-1 font-bold text-white shadow-md transition-all hover:bg-red-YUMFINITY active:bg-red-900 ">
              Submit
            </button>
          </div>
        </form>
      )}
      {order.review.length > 0 && (
        <fieldset className="w-full lg:col-span-2">
          <div className="text-lg font-bold">Your review</div>
          <div className="flex items-center gap-8 text-lg">
            {order.review[0].comment}
            <div className="flex items-center gap-1">
              {order.review[0].rating}
              <FaStar />
            </div>
          </div>
        </fieldset>
      )}
      <fieldset className="lg:col-span-2">
        <div className="flex w-full flex-col items-start gap-3">
          <div className="text-lg font-bold">Items</div>
          <div className="flex w-full flex-col items-center text-lg">
            <div className="grid w-11/12 grid-cols-4 py-2 font-bold">
              <div className="col-span-2">Item Name</div>
              <div>Quantity</div>
              <div>Note</div>
            </div>
            {order.items.map((item, index) => (
              <div
                key={index}
                className="grid w-full grid-cols-4 items-center py-2 lg:w-11/12"
              >
                <div className="col-span-2">{item.itemId}</div>
                <div className="flex items-center gap-1">
                  {item.quantity}
                  <BsCartCheckFill />
                </div>
                <div>{item.specialItemRequirement || "----"}</div>
              </div>
            ))}
          </div>
        </div>
      </fieldset>
    </div>
  );
}
