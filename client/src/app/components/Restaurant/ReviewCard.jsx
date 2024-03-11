import { FaStar } from "react-icons/fa6";

export default function ReviewCard({ className }) {
  return (
    <section
      className={`flex flex-col gap-3 rounded-md bg-gray-100 px-10 py-5 shadow-md ${className}`}
    >
      <div className="flex items-center gap-3 text-xl">
        <div className="flex size-10 items-center justify-center rounded-full bg-yellow-YUMFINITY text-xl text-white-YUMFINITY">
          B
        </div>
        Belal Ahmad
        <div className="ml-auto flex items-center gap-1 font-bold">
          3
          <FaStar color="orange" />
        </div>
      </div>
      <div className="p-2">
        Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis quo
        autem laborum modi mollitia eos quisquam error excepturi esse. Omnis,
        quae!
      </div>
      <div className="px-4 italic">March, 11, 2024</div>
    </section>
  );
}
