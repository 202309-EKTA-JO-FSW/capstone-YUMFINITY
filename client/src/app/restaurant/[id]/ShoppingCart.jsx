import ShoppingCartRow from "./ShoppingCartRow";
import { FaTrashAlt } from "react-icons/fa";

export default function ShoppingCart({
  cart,
  message,
  handleUpsertCart,
  handleDeleteCart,
  pathId,
}) {
  function calculateSubtotal() {
    if (cart) {
      const total = cart.items.reduce((accum, current) => {
        const itemTotal = current.quantity * current.itemId.price;
        return accum + itemTotal;
      }, 0);
      return total;
    }
  }

  const Subtotal = calculateSubtotal();
  const Delivery = 5;

  return (
    <div className="flex translate-y-12 justify-center">
      {(message?.includes("Cart not found") ||
        message?.includes("Cart emptied") ||
        message?.includes("deleted")) &&
        !cart?.restaurantId._id && (
          <div className=" left-0 right-0 top-0 flex max-h-fit flex-col items-center justify-center px-10 text-center font-boston text-2xl">
            You dont have any item in your cart!
          </div>
        )}
      {!(
        message?.includes("Cart not found") ||
        message?.includes("Cart emptied") ||
        message?.includes("deleted")
      ) &&
        pathId === cart?.restaurantId._id && (
          <div className="relative flex max-h-fit w-4/5 flex-col justify-center">
            <FaTrashAlt
              color="red"
              onClick={() => handleDeleteCart()}
              className="absolute right-5 top-5 size-8 cursor-pointer hover:animate-pulse"
            />
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
              <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>
              {cart?.items.map(({ itemId, quantity }) => (
                <ShoppingCartRow
                  key={itemId._id}
                  item={itemId}
                  quantity={quantity}
                  handleUpsertCart={handleUpsertCart}
                />
              ))}
              <div className="flex items-center justify-between pt-4">
                <span className="font-bold">Subtotal:</span>
                <span className="font-bold">${Subtotal?.toFixed(2)}</span>
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
              <div className="mt-6 flex justify-center">
                <button className="rounded  bg-[#FD7014] px-4 py-2 font-bold text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      {cart && pathId !== cart?.restaurantId._id && cart?.restaurantId._id && (
        <div className="flex flex-col items-center gap-3">
          <div className="px-10 text-center font-boston text-2xl">
            You Already have a cart for {cart?.restaurantId.name} restaurant
            <br /> Delete it to make new one!
          </div>
          <FaTrashAlt
            color="red"
            onClick={() => handleDeleteCart()}
            className="size-12 cursor-pointer hover:animate-pulse"
          />
        </div>
      )}
    </div>
  );
}
