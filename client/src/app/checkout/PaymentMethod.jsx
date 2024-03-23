export default function PaymentMethod() {
  return (
    <section className="mt-5 grid gap-6 rounded-lg border bg-white px-4 py-6 shadow-lg">
      <p className="mb-4 pl-2 font-boston text-2xl">Payment method</p>
      <div className="relative">
        <input
          form="payment"
          className="peer hidden"
          id="cash"
          type="radio"
          value="cash"
          defaultChecked
          name="paymentMethod"
        />
        <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-700"></span>
        <label
          className="flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
          htmlFor="cash"
        >
          <div className="ml-5">
            <span className="mt-2 font-semibold">Cash on Delivery</span>
          </div>
        </label>
      </div>
      <div className="relative">
        <input
          className="peer hidden"
          id="paypal"
          form="payment"
          type="radio"
          value="paypal"
          name="paymentMethod"
        />
        <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-700"></span>
        <label
          className="flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
          htmlFor="paypal"
        >
          <div className="ml-5">
            <img
              src="https://readymadeui.com/images/paypal.webp"
              className="w-20"
              alt="paypalCard"
            />
          </div>
        </label>
      </div>
      <div className="relative">
        <input
          className="peer hidden"
          id="card"
          form="payment"
          type="radio"
          value="card"
          name="paymentMethod"
        />
        <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-700"></span>
        <label
          className="flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
          htmlFor="card"
        >
          <div className="ml-5 flex cursor-pointer gap-2">
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
          </div>
        </label>
      </div>
    </section>
  );
}
