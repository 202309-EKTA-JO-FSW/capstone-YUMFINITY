"use client";

import { useEffect, useState } from "react";
import PastOrderCard from "./PastOrderCard";

export default function PastOrders({ getPastOrders }) {
  const [pastOrders, setPastOrders] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    async function fetchOrders() {
      const pastOrders = await getPastOrders();
      pastOrders.results.length
        ? setPastOrders(pastOrders.results)
        : setEmpty(true);
    }
    fetchOrders();
  }, []);
  return (
    <article className="order-3 rounded-lg bg-orange-200 shadow-lg lg:col-start-2 lg:row-start-1 dark:bg-yellow-YUMFINITY/80 dark:shadow-red-YUMFINITY/40">
      <div className="flex items-center justify-between px-6 pt-4 lg:pt-8">
        <h2 className="font-boston text-2xl">Past Orders</h2>
      </div>
      <section className="relative m-3 flex h-[650px] flex-col overflow-y-scroll rounded-lg border bg-white shadow-lg lg:m-6 lg:mt-8 lg:h-[634px] dark:bg-gray-950">
        {pastOrders.length ? (
          pastOrders.map((order, index) => (
            <PastOrderCard key={index} order={order} />
          ))
        ) : (
          <div className="absolute left-1/2 top-1/2 text-center font-boston text-2xl [transform:_translate(-50%,-50%)]">
            {empty
              ? "You don't have any order yet, go order one"
              : "Loading......"}
          </div>
        )}
      </section>
    </article>
  );
}
