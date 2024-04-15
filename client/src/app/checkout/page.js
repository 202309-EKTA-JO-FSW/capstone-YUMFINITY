import React from "react";

import ShoppingCart from "./ShoppingCart";
import PaymentMethod from "./PaymentMethod";
import PaymentForm from "./PaymentForm";
import { cookies } from "next/headers";
import { refreshAccessToken } from "../utils/refreshAccessToken";
import { main_url_BACKEND } from "../utils/URLs";

async function getUserCart() {
  "use server";

  const res = await fetch(`${main_url_BACKEND}/cart`, {
    method: "GET",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const data = await res.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await getUserCart(); // Recursively call the function with the new token
  }

  return data;
}

async function submitOrder(fields) {
  "use server";

  const res = await fetch(`${main_url_BACKEND}/checkout`, {
    method: "POST",
    headers: {
      Cookie: cookies().toString(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  });
  const data = await res.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await getUserCart(); // Recursively call the function with the new token
  }

  return data;
}

const Checkout = () => {
  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="lg::mb-0 -mb-14 mt-4 flex flex-col p-8">
          <p className="font-boston text-xl">Order Summary</p>
          <p className="text-lg text-gray-400">
            Check your items. And select a suitable payment method.
          </p>
          <ShoppingCart getUserCart={getUserCart} />
          <PaymentMethod />
        </div>
        <PaymentForm submitOrder={submitOrder} />
      </div>
    </div>
  );
};

export default Checkout;
