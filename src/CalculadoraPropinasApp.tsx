import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function CalculadoraPropinasApp() {
  const { order, handleAddItem } = useOrder();

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                onHandleAddItem={handleAddItem}
              />
            ))}
          </div>
        </div>
        <div className="p-5 border border-gray-200 rounded-md">
          <OrderContents order={order} />
        </div>
      </main>
    </>
  );
}

export default CalculadoraPropinasApp;
