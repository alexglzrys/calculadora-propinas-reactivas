import { formatCurrency } from "../helpers";
import type { OrderItemType } from "../types";

interface OrderTotalsProps {
  order: OrderItemType[];
  tip: number;
  onHandlePlaceOrder: () => void;
}

export default function OrderTotals({
  order,
  tip,
  onHandlePlaceOrder,
}: OrderTotalsProps) {
  // Determinar los diferntes totales como estado derivado a partir de las ordenes de consumo
  const subtotalAmount = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tipAmount = subtotalAmount * tip;
  const totalAmount = subtotalAmount + tipAmount;
  const isDisabled = totalAmount === 0;

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propinas:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a Pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        type="button"
        className="bg-black text-white uppercase w-full p-3 cursor-pointer disabled:opacity-10 disabled:cursor-default font-bold"
        disabled={isDisabled}
        onClick={onHandlePlaceOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
