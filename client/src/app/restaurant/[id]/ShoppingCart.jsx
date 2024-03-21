export default function ShoppingCart() {
  return (
    <div className="relative">
      <div className="fixed left-0 right-0 top-0 flex max-h-fit flex-col items-center justify-center">
        <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
          <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>
          <div className="mb-4 flex justify-between">
            <div className="flex items-center">
              <div>
                <h2 className="font-bold">Pizza Napoletana</h2>
                <p className="text-gray-700">
                  Authentic Italian pizza, Naples style
                </p>
              </div>
            </div>
            <div className="mx-4">
              <input type="number" value="1" className="w-16 text-center" />
            </div>
            <span className="font-bold">$10.00</span>
          </div>
          <hr className="my-4" />
          <div className="mb-4 flex justify-between">
            <div className="flex items-center">
              <div>
                <h2 className="font-bold">Focaccia</h2>
                <p className="text-gray-700">
                  Fluffy, olive oil-infused Italian bread
                </p>
              </div>
            </div>
            <div className="mx-4">
              <input type="number" value="1" className="w-16 text-center" />
            </div>
            <span className="font-bold">$9.00</span>
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-between">
            <span className="font-bold">Subtotal:</span>
            <span className="font-bold">$19.00</span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span>Delivery fees:</span>
            <span>$1.00</span>
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-between">
            <span className="font-bold">Total:</span>
            <span className="font-bold">$20.00</span>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="rounded  bg-[#FD7014] px-4 py-2 font-bold text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
