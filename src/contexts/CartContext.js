import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //añadir al carrito
  const addToCart = (product, quantity) => {
    //verificar si el producto existe en el carrito
    if (isInCart(product.id)) {
      const newCart = [...cart]; //hacemos copia de producto
      for (const element of newCart) {
        //busco cual producto del carrito conicid con el producto
        if (element.product.id === product.id) {
          element.quantity = element.quantity + quantity; //cuando le encontramos , le sumamos la cantidad
        }
      }
      setCart(newCart);
    } else {
      setCart([...cart, { product: product, quantity: quantity }]);
    }
  };

  // verifica si esta en el carrito
  const isInCart = (id) => {
    return cart.find((i) => i.product.id === id);
  };

  //limpair carrito
  const clearCart = () => setCart([]);

  //Eliminar un producto del carrito
  const removeFromCart = (id) => {
    const newCart = [...cart].filter((i) => i.product.id !== id);
    setCart(newCart);
  };

  //cantidad total de productos,
  const getQuantity = () => {
    let cantidad = 0;
    cart.forEach((item) => (cantidad = cantidad + item.quantity));
    return cantidad;
  };

  //Multiplicar precio segun al cantidad
  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.quantity * item.product.price;
    });
    return Intl.NumberFormat("es-AR").format(total);
  };

  //Funciones globlales del carrrito
  const functionContext = {
    clearCart,
    addToCart,
    isInCart,
    removeFromCart,
    getQuantity,
    getTotal,
  };

  return (
    <CartContext.Provider value={{ cart, functionContext }}>
      {children}
    </CartContext.Provider>
  );
};
