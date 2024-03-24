import { useEffect, useRef, useState } from "react";

export default function FAQ() {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(ref.current);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`relative my-16 w-full border bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 dark:border-gray-700 dark:bg-gray-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center font-boston text-3xl tracking-tight md:text-5xl">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-gray-800 md:text-xl dark:text-gray-200">
            Frequenty asked questions
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> How does the ordering process work?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-gray-800 dark:text-gray-200">
                Our ordering process is simple and straightforward. Users can
                browse through our selection of restaurants, choose their
                favorite dishes, customize their orders if needed, and proceed
                to checkout where they can enter their delivery details and
                payment information.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> What payment methods do you accept?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-gray-800 dark:text-gray-200">
                We accept a variety of payment methods including credit/debit
                cards, PayPal, and in some cases, cash on delivery. You can
                select your preferred payment option during the checkout
                process.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> How long does delivery take?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-gray-800 dark:text-gray-200">
                Delivery times may vary depending on your location and the
                restaurant&apos;s preparation time. Typically, deliveries are
                completed within 30 mins on average.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> Can I customize my order?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-gray-800 dark:text-gray-200">
                Absolutely! We understand that everyone has different
                preferences, which is why we offer customization options for
                many of our menu items. Whether you want to add extra toppings,
                remove certain ingredients, or adjust portion sizes, you can
                personalize your order to your liking.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> What if there is an issue with my order?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-gray-800 dark:text-gray-200">
                If you encounter any issues with your order, such as missing
                items or incorrect dishes, please don&apos;t hesitate to contact
                our customer support team. You can reach us and we will be happy
                to assist you and ensure that you are completely satisfied with
                your experience.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
