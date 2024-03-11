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
    <div
      className={`group relative flex flex-col justify-between rounded-xl border border-gray-400 bg-white leading-normal transition-all hover:[box-shadow:_0px_0px_10px_3px_#00000062] lg:border-gray-400 ${className}`}
    >
      <Link href={"/"}>
        <Image
          src={restaurantPlaceholder}
          priority
          className="rounded-xl rounded-b-none"
          alt="restuarant"
        />
        <div className="p-4 pt-3">
          <div className="mb-2">
            <div className="mb-2 flex items-center justify-between text-lg font-bold text-gray-900 hover:text-indigo-600">
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
    </div>
  );
}
