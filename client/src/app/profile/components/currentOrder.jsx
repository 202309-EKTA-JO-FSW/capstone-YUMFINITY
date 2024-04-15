"use client";

const fakeOrder = {
  orderDate: new Date(Date.now()),
  orderStatus: "delivering",
  totalBill: 13.5,
  deliveryAddress: [32, 33],
  deliveryFee: 4,
  userId: "fakeUserId",
  restaurantId: "fakeRestaurantId",
  items: [
    {
      itemId: "fakeItemId",
      quantity: 3,
      specialItemRequirement: "no mayonase",
    },
    {
      itemId: "fakeItemId",
      quantity: 2,
      specialItemRequirement: "ketchup",
    },
  ],
  specialOrderRequirement: "hurryyyy",
  payment: {
    totalPayment: 17.5,
    paymentMethod: "Cash",
  },
};

import { useEffect, useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";

export default function CurrentOrder({ fetchCUrrentOrder }) {
  const [currentOrder, setCurrentOrder] = useState(null);

  function handleCancel() {
    setCurrentOrder(null);
  }

  useEffect(() => {
    async function getOrder() {
      const order = await fetchCUrrentOrder();
      if (order.message) {
        setCurrentOrder(null);
        return;
      }
      if (order) {
        console.log(order);
        setCurrentOrder(order);
      }
    }
    getOrder();
  }, []);

  return (
    <article className="order-2 rounded-lg bg-orange-200 shadow-lg dark:bg-yellow-YUMFINITY/80 dark:shadow-red-YUMFINITY/40">
      <div className="flex items-center justify-between px-6 pt-4 lg:pt-8">
        <h2 className="font-boston text-2xl">Current Order</h2>
        {currentOrder && (
          <button
            onClick={handleCancel}
            className="rounded-lg bg-red-700/75 px-4 py-2 text-xl font-bold text-white shadow-md transition-all hover:bg-red-YUMFINITY active:bg-red-900 "
          >
            Cancel
          </button>
        )}
      </div>
      {!currentOrder && (
        <section className="m-3 mt-9 flex h-[200px] items-center justify-center rounded-lg border bg-white shadow-lg dark:bg-gray-950">
          <div className="px-16 py-12 text-center text-2xl font-bold">
            You don&apos;t have a Current Order being prepared
          </div>
        </section>
      )}
      {currentOrder && (
        <section className="m-3 flex flex-col rounded-lg border bg-white shadow-lg *:flex *:flex-col *:items-start *:justify-start *:border-b *:px-4 *:py-4 *:md:flex-row *:md:justify-between lg:m-6 *:lg:items-center dark:bg-gray-950">
          <fieldset>
            <div className="text-lg font-bold">Order Date</div>
            <div className="text-lg">{currentOrder.orderDate}</div>
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Delivery Address</div>
            <div className="text-lg">{`latitude:${currentOrder.deliveryAddress[0]} longitude:${currentOrder.deliveryAddress[1]}`}</div>
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Restaurant</div>
            <div className="text-lg">{currentOrder.restaurantId.name}</div>
          </fieldset>
          <fieldset>
            <div className="flex w-full flex-col items-start gap-3">
              <div className="text-lg font-bold">Items</div>
              <div className="flex w-full flex-col text-lg">
                <div className="grid grid-cols-4 px-8 py-2 font-bold">
                  <div className="col-span-2">Item Name</div>
                  <div>Quantity</div>
                  <div>Note</div>
                </div>
                {currentOrder.items.map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-4 items-center border-black-YUMFINITY px-8 py-2 dark:border-white-YUMFINITY ${index === currentOrder?.items.length - 1 ? "" : "border-b"}`}
                  >
                    <div className="col-span-2">{item.itemId.title}</div>
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
          <fieldset>
            <div className="text-lg font-bold">Order Note</div>
            <div className="text-lg">
              {currentOrder.specialOrderRequirement}
            </div>
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Payment</div>
            <div className="flex flex-col gap-2">
              <div>Payment Method: {currentOrder.payment.paymentMethod}</div>
              <div>Total Payment: {currentOrder.payment.totalPayment}</div>
            </div>
          </fieldset>
        </section>
      )}
    </article>
  );
}
