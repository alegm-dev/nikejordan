import { useState, createContext, useContext } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //añadir al carrito
  const addToCart = (product, quantity) => {
    //verificar si el producto existe en el carrito
    if (isInCart(product.id)) {
      const newCart = [...cart]; //hacemos copia de producto
      newCart.forEach((i) => {
        //busco cual producto del carrito concide con el producto
        if (i.product.id === product.id) {
          if (i.quantity + quantity <= product.stock) {
            notify(quantity);
            i.quantity += quantity;
          } else if (product.stock === i.quantity) {
            toast.error(`Superaste el stock disponible de este modelo`, {
              id: "noStock",
            });
          } else {
            toast.error(
              `Solo puedes agregar ${
                product.stock - i.quantity
              } producto de este modelo`,
              { id: "stock" }
            );
          }
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { product: product, quantity: quantity }]);
      notify(quantity);
    }
  };

  //Notifica cuantos elemento se agregaron al carrito
  const notify = (numCounter) => {
    if (numCounter === 0) {
      toast("Seleccione minimo 1 unidad", {
        icon: "❗",
        id: "noProduct",
        duration: 2000,
      });
    } else if (numCounter > 0) {
      toast.success(
        `${
          numCounter === 1
            ? `Se agrego ${numCounter} producto`
            : `Se agregaron ${numCounter} productos`
        } al carrito!`,
        { id: "product", duration: 2000 }
      );
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
