import React from "react";

import ShoppingCart from "./ShoppingCart";
import PaymentMethod from "./PaymentMethod";
import PaymentForm from "./PaymentForm";

const Checkout = () => {
  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable payment method.
          </p>
          <ShoppingCart />
          <p className="mt-8 text-lg font-medium">Choose payment method</p>
          <PaymentMethod />
        </div>
        <PaymentForm />
      </div>
    </div>
  );
};

export default Checkout;
