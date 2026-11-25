import type { MenuItem } from "../types";

interface MenuItemProps {
  item: MenuItem;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <button className="flex justify-between p-3 w-full border-2 border-teal-400 hover:bg-teal-200 cursor-pointer">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
