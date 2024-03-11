import Image from "next/image";
import restaurantPlaceholder from "./restuarant-placeholder.jpg";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { TbClockHour5 } from "react-icons/tb";
import { TbEyeClosed } from "react-icons/tb";

export default function RestaurantCard({ className }) {
  const workingHours = ["Opened", "Closed"];
  const randomIndex = Math.floor(Math.random() * workingHours.length);
  return (
    <Link
      href={"/"}
      className={`group relative flex size-full flex-col justify-between rounded-xl bg-white leading-normal shadow-md shadow-gray-400 transition-all ${className}`}
    >
      <Image
        src={restaurantPlaceholder}
        priority
        className="rounded-xl rounded-b-none"
        alt="restuarant"
      />
      <div className="p-4 pt-5">
        <div className="my-2 space-y-6">
          <div className="mb-2 flex items-center justify-between text-pretty font-bold text-gray-900 hover:text-yellow-YUMFINITY">
            Restaurant Name
            <div className="flex items-center gap-1 text-sm">
              {(Math.random() * (4 - 1 + 1) + 1).toFixed(1)}
              <FaStar color="orange" />
            </div>
          </div>
          <p className="flex items-center gap-1 text-sm text-gray-700">
            {workingHours[randomIndex] === "Opened" ? (
              <TbClockHour5 className="size-5" />
            ) : (
              <TbEyeClosed className="size-5" />
            )}
            {workingHours[randomIndex]}
          </p>
        </div>
      </div>
    </Link>
  );
}
