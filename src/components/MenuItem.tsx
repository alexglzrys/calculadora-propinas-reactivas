import type { MenuItemType } from "../types";

interface MenuItemProps {
  item: MenuItemType;
  onHandleAddItem: (item: MenuItemType) => void;
}

export default function MenuItem({ item, onHandleAddItem }: MenuItemProps) {
  return (
    <button
      className="flex justify-between p-3 w-full border-2 border-teal-400 rounded-md hover:bg-teal-200 cursor-pointer"
      type="button"
      onClick={() => onHandleAddItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
