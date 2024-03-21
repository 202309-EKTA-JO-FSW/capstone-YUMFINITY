import { FaStar } from "react-icons/fa6";

export default function ReviewCard({ className, review }) {
  return (
    <section
      className={`flex w-full flex-col gap-3 rounded-md bg-white px-10 py-5 shadow-md dark:bg-gray-800 ${className}`}
    >
      <div className="flex items-center gap-3 text-xl capitalize">
        <div className="flex size-10 items-center justify-center rounded-full bg-yellow-YUMFINITY text-xl text-white-YUMFINITY">
          {review.userId.username[0]}
        </div>
        <div className="max-w-14 truncate">{review.userId.username}</div>
        <div className="ml-auto flex items-center gap-1 font-bold">
          {review.rating}
          <FaStar color="orange" />
        </div>
      </div>
      <div className="m-2 line-clamp-2">
        {review.comment ||
          `Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis quo
        autem laborum modi mollitia eos quisquam error excepturi esse. Omnis,
        quae!`}
      </div>
      <div className="px-4 italic">{review.reviewDate}</div>
    </section>
  );
}
