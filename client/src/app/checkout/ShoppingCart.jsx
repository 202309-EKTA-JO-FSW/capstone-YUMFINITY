"use client";

import { useEffect, useState } from "react";
import ShoppingCartRow from "./ShoppingCartRow";
import { useRouter } from "next/navigation";

export default function ShoppingCart({ getUserCart }) {
  const [cart, setCart] = useState(null);
  const router = useRouter();

  async function fetchCart() {
    const cart = await getUserCart();
    if (!cart.Cart) {
      router.push("/restaurants");
    }
    setCart(cart.Cart);
  }

  useEffect(() => {
    fetchCart();
  }, []);

  function calculateSubtotal() {
    if (cart) {
      const total = cart?.items?.reduce((accum, current) => {
        const itemTotal = current.quantity * current.itemId.price;
        return accum + itemTotal;
      }, 0);
      return total;
    }
  }

  const Subtotal = calculateSubtotal();
  const Delivery = 5;

  if (!cart) return null;

  return (
    <section className="my-8">
      <div className="relative flex h-fit flex-col justify-center">
        <div className="rounded-lg border bg-gray-50 p-6 shadow-lg">
          <h1 className="mb-6 font-boston text-2xl">Shopping Cart</h1>
          {cart?.items?.map(({ itemId, quantity }) => (
            <ShoppingCartRow
              key={itemId._id}
              item={itemId}
              quantity={quantity}
            />
          ))}
          <div className="flex items-center justify-between pt-4">
            <span className="font-bold">Subtotal:</span>
            <span className="font-bold">${Subtotal?.toFixed(2)}</span>
            <input
              type="hidden"
              name="totalBill"
              form="payment"
              value={parseFloat(Subtotal + Delivery)}
            />
          </div>
          <div className="flex items-center justify-between border-b py-4">
            <span>Delivery fees:</span>
            <span>${Delivery}</span>
          </div>
          <div className="flex items-center justify-between py-6">
            <span className="font-bold">Total:</span>
            <span className="font-bold">
              ${(Subtotal + Delivery).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
