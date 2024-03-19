export default function PaymentMethod() {
  return (
    <form className="mt-5 grid gap-6">
      <div className="relative">
        <input
          className="peer hidden"
          id="radio_1"
          type="radio"
          name="radio"
          checked
        />
        <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-700"></span>
        <label
          className="flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
          htmlFor="radio_1"
        >
          <div className="ml-5">
            <span className="mt-2 font-semibold">Cash on Delivery</span>
          </div>
        </label>
      </div>
      <div className="relative">
        <input
          className="peer hidden"
          id="radio_2"
          type="radio"
          name="radio"
          checked
        />
        <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-700"></span>
        <label
          className="flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
          htmlFor="radio_2"
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
          id="radio_3"
          type="radio"
          name="radio"
          checked
        />
        <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-700"></span>
        <label
          className="flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
          htmlFor="radio_3"
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
    </form>
  );
}
