import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function CalculadoraPropinasApp() {
  const {
    order,
    tip,
    handleAddItem,
    handleRemoveItem,
    handleAddTip,
    handlePlaceOrder,
  } = useOrder();

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
        <div className="p-5 border border-dashed border-gray-200 rounded-lg space-y-10">
          {order.length === 0 ? (
            <p className="text-center">La orden esta vacía</p>
          ) : (
            <>
              <OrderContents
                order={order}
                onHandleRemoveItem={handleRemoveItem}
              />
              <TipPercentageForm tip={tip} onHandleAddTip={handleAddTip} />
              <OrderTotals
                order={order}
                tip={tip}
                onHandlePlaceOrder={handlePlaceOrder}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default CalculadoraPropinasApp;
