import { formatCurrency } from "../helpers";
import type { OrderItemType } from "../types";

interface OrderContentsProps {
  order: OrderItemType[];
  onHandleRemoveItem: (id: OrderItemType["id"]) => void;
}

export default function OrderContents({
  order,
  onHandleRemoveItem,
}: OrderContentsProps) {
  return (
    <>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.length === 0 ? (
          <p className="text-center">La orden esta vacía</p>
        ) : (
          order.map((item) => (
            <div
              className="space-x-3 border-t border-gray-200 py-5 last-of-type:border-b flex justify-between items-center"
              key={item.id}
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-bold">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                type="button"
                className="bg-red-700 text-white rounded-full size-7 cursor-pointer text font-bold"
                onClick={() => onHandleRemoveItem(item.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
