import ShoppingContenedor from "./ShoppinContenedor";

export const ShoppingList = () => {
  return (
    <ShoppingContenedor>
      <div className="Box listShopping ">
        <h3>Shopping list </h3>
      </div>
      <div className="Box cashRegister">
        <h3>Cash register</h3>
      </div>
    </ShoppingContenedor>
  );
};
