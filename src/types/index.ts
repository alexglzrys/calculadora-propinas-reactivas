// Representa el tipo de dato para un elemento en el menú
export type MenuItemType = {
  id: number;
  name: string;
  price: number;
};

// OrderItemType va a heredar el tipo MenuItem y le sumará una propiedad adicional llamada "quantity"
export type OrderItemType = MenuItemType & {
  quantity: number;
};
