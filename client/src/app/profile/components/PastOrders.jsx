import PastOrderCard from "./PastOrderCard";

const orderWithReview = {
  orderStatus: "delivering",
  totalBill: "25",
  deliveryAddress: [32, 33],
  deliveryFee: 5,
  userId: "65e9dcca489bd0bbbc92516d",
  restaurantId: "65eaa174599e2448c2414011",
  items: [
    {
      itemId: "65eaa6d63bdd5da6fdc08aff",
      quantity: 3,
      specialItemRequirement: "hurry up",
    },
  ],
  specialOrderRequirement: "hongo bongo",
  payment: {
    totalPayment: 25,
    paymentMethod: "Cash",
  },
  orderDate: new Date(Date.now()),
  review: [
    {
      _id: "65f173b1384235134c0d8359",
      rating: 4,
      comment: "very delecious",
      restaurantId: "65eaa174599e2448c2414011",
      userId: "65e9dcca489bd0bbbc92516d",
      orderId: "65f172d3384235134c0d834f",
      reviewDate: "2024-03-13T09:36:49.423Z",
      createdAt: "2024-03-13T09:36:49.424Z",
      updatedAt: "2024-03-13T09:36:49.424Z",
      __v: 0,
    },
  ],
};

const orderWithOutReview = {
  orderStatus: "delivering",
  totalBill: "25",
  deliveryAddress: [32, 33],
  deliveryFee: 5,
  userId: "65e9dcca489bd0bbbc92516d",
  restaurantId: "65eaa174599e2448c2414011",
  items: [
    {
      itemId: "65eaa6d63bdd5da6fdc08aff",
      quantity: 3,
      specialItemRequirement: "hurry up",
    },
  ],
  specialOrderRequirement: "hongo bongo",
  payment: {
    totalPayment: 25,
    paymentMethod: "Cash",
  },
  orderDate: new Date(Date.now()),
  review: [],
};

export default function PastOrders() {
  return (
    <article className="order-3 rounded-lg bg-orange-200 shadow-lg lg:col-start-2 lg:row-start-1 dark:bg-yellow-YUMFINITY/80 dark:shadow-red-YUMFINITY/40">
      <div className="flex items-center justify-between px-6 pt-4 lg:pt-8">
        <h2 className="font-boston text-2xl">Past Orders</h2>
      </div>
      <section className="m-3 flex h-[650px] flex-col overflow-y-scroll rounded-lg border bg-white shadow-lg lg:m-6 lg:mt-8 lg:h-[634px] dark:bg-gray-950">
        <PastOrderCard order={orderWithOutReview} />
        <PastOrderCard order={orderWithReview} />
        <PastOrderCard order={orderWithReview} />
        <PastOrderCard order={orderWithOutReview} />
        <PastOrderCard order={orderWithReview} />
      </section>
    </article>
  );
}
