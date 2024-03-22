import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";

export default function ShoppingCartRow({ item, quantity, handleUpsertCart }) {
  return (
    <div className="flex justify-between border-b py-4">
      <div className="mr-auto flex items-center">
        <div>
          <h2 className="font-bold">{item.title}</h2>
          <p className="line-clamp-3 text-gray-700">{item.description}</p>
        </div>
      </div>
      <div className="mx-4 flex items-center gap-3">
        <FiMinusCircle
          onClick={() => handleUpsertCart({ itemId: item._id, quantity: -1 })}
          color="red"
          className="cursor-pointer"
        />
        <span className="text-lg font-bold">{quantity}</span>
        <FiPlusCircle
          onClick={() => handleUpsertCart({ itemId: item._id, quantity: 1 })}
          color="green"
          className="cursor-pointer"
        />
        <FiDelete
          color="orange"
          className="ml-3 cursor-pointer"
          onClick={() =>
            handleUpsertCart({ itemId: item._id, quantity: -quantity })
          }
        />
      </div>
      <span className="font-bold">${item.price}</span>
    </div>
  );
}
