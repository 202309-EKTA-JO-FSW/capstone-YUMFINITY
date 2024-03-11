import Image from "next/image";
import itemPlaceholder from "./item-placeholder.jpg";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function ItemCard({ className }) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-between gap-3 border-y border-black-YUMFINITY bg-white p-2 md:flex-row dark:border-white-YUMFINITY dark:bg-gray-800 ${className}`}
    >
      <Image
        src={itemPlaceholder}
        alt="item picture"
        className="w-32 rounded-md ring-2 ring-yellow-YUMFINITY"
      />
      <div className="flex flex-col items-center space-y-2 px-1 pt-2 md:items-start md:pr-10">
        <h3 className="font-boston text-lg">Item Title</h3>
        <p className="line-clamp-3 md:line-clamp-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          magnam animi corrupti sed atque voluptates optio iure fugit minus,
          sunt repudiandae, quis esse totam! Qui voluptatum aperiam quas.
          Inventore, commodi id! Ab pariatur, veniam, minus quaerat eaque quae
          assumenda magni quas voluptatum beatae voluptate deleniti itaque illo
          tempora unde. Enim.
        </p>
      </div>
      <aside className="ml-auto flex items-center justify-center gap-3">
        ${(Math.random() * 10).toFixed(2)}
        <button>
          <IoIosAddCircleOutline
            fill="white"
            className="rounded-full bg-[green]"
            size={27}
          />
        </button>
      </aside>
    </div>
  );
}
