export default function Services() {
  return (
    <section className="w-11/12 border-b border-black-YUMFINITY p-4 py-14 dark:border-white-YUMFINITY">
      <div className="container mx-auto rounded-lg pb-20 pt-12">
        <h1 className="mb-8 text-center font-boston text-4xl font-bold text-gray-800 dark:text-white-YUMFINITY">
          Our Services
        </h1>
        <p className="mb-12 text-center text-lg text-gray-700 dark:text-white-YUMFINITY">
          Explore a range of features designed to make your food ordering
          journey seamless, satisfying, and tailored to your preferences.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Secure Payment Gateway
            </h2>
            <p className="text-gray-700">
              Guarantee the safety of transactions by integrating a robust and
              secure payment gateway. Highlight the use of encryption
              technologies to protect users financial information during the
              payment process.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Reward Points
            </h2>
            <p className="text-gray-700">
              Implement a loyalty program that allows customers to earn points
              with every purchase. Emphasize the benefit of accumulating these
              points over time, which can then be redeemed for free delivery on
              future orders.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              24/7 Customer Support
            </h2>
            <p className="text-gray-700">
              Assistance with any aspect of the service, a 24/7 support system
              ensures that customers can reach out for help at their
              convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
