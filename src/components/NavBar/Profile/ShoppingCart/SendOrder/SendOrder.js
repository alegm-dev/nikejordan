import { useEffect } from "react";
import { useCartContext } from "../../../../../contexts/CartContext";
import { createOrder } from "../../../../../services/firestore";
import Swal from "sweetalert2";
import { Loader } from "../../../../Loader/Loader";

export const SendOrder = ({ buyer, isLoading, setIsLoading }) => {
  const { cart, functionContext } = useCartContext();
  const { getTotal, clearCart } = functionContext;

  const localDate = () => {
    const dateNow = new Date();
    const opciones = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    const date = dateNow.toLocaleDateString("es-AR", opciones);
    return date;
  };

  const orderInfo = {
    buyer: buyer,
    item: cart.map((i) => ({
      id: i.product.id,
      name: i.product.name,
      price: i.product.price,
      quantity: i.quantity
    })),
    total: getTotal(),
    date: localDate()
  };

  useEffect(() => {
    createOrder(orderInfo)
      .then((doc) => {
        OrderAlert(doc.id);
        setIsLoading(false);
        clearCart();
      })
      .catch((err) => {
        setIsLoading(true);
        Swal.fire({
          html: `Hubo un el siguiente error: ${err} <br> Disculpe, actualice la pagina)`
        });
      });
  }, []);

  const OrderAlert = (id) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Compra finalizada",
      showConfirmButton: true,
      confirmButtonText: "Ir al inicio",
      confirmButtonColor: "#3f43bf",
      html: `El numero de orden es <br>#<strong>${id}</strong> <br>Te enviamos el detalle de tu compra a<br> <strong>${buyer.email}`,
      footer: `<small>${localDate()}</small> `,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          imageUrl: "https://freepngimg.com/thumb/nike/28134-5-nike-logo.png",
          imageWidth: 50,
          imageHeight: "auto",
          text: `Gracias por comprar en Nike Air Jordan.`,
          footer: "Redirigiendo a  la pagina de inicio...",
          showConfirmButton: false,
          timer: 4000,
          allowOutsideClick: false
        }).then(() => {
          setIsLoading(true);
          return (window.location.href = "/");
        });
      }
    });
  };

  return isLoading && <Loader />;
};
