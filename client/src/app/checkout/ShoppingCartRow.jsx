export default function ShoppingCartRow({ item, quantity }) {
  return (
    <div className="flex justify-between border-b py-4">
      <div className="flex w-3/5 items-center">
        <div>
          <h2 className="font-bold">{item.title}</h2>
          <p className="line-clamp-3 text-gray-700">{item.description}</p>
        </div>
      </div>
      <div className="mx-4 flex items-center gap-3">
        <span className="text-lg font-bold">Quantity: {quantity}</span>
      </div>
      <span className="font-bold">${item.price}</span>
    </div>
  );
}
