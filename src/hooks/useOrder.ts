import { useState } from "react";
import type { MenuItemType, OrderItemType } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItemType[]>([]);

  const handleAddItem = (item: MenuItemType) => {
    setOrder((prevOrder) => {
      const itemExist = prevOrder.some((orderItem) => orderItem.id === item.id);

      if (itemExist) {
        return prevOrder.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem,
        );
      }

      return [...prevOrder, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveItem = (id: OrderItemType["id"]) => {
    setOrder((prevOrder) =>
      prevOrder.filter((orderItem) => orderItem.id !== id),
    );
  };

  return {
    order,
    handleAddItem,
    handleRemoveItem,
  };
}
