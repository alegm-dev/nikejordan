import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Counter } from "../../Counter/Counter";
import { Loader } from "../../../../Loader/Loader";
import DetailContainer from "./DetailContainer";
import { ArrowBack } from "../../../../ArrowBack/ArrowBack";

export const ItemDetail = ({ shoppingCart, setShoppingCart }) => {
  const parms = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [cardDate, setCardDate] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("/data.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          setCardDate(
            data.filter(($data) => $data.id === Number(parms.dateId))
          );
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <DetailContainer>
      <ArrowBack link="/store" />
      <div className="Box-image">
        <img src={cardDate[0]?.image} alt="imagen de zapatilla jordan" />
        <img src={cardDate[0]?.image2} alt="imagen de zapatilla jordan" />
      </div>
      <div className="Box-info">
        <h3 className="name">{cardDate[0]?.name}</h3>
        <h4 className="price">${cardDate[0]?.price}</h4>
        <p className="descrip">{cardDate[0]?.description}</p>
        <Counter
          stock={cardDate[0]?.stock}
          cardDate={cardDate}
          className="counter"
          shoppingCart={shoppingCart} //state
          setShoppingCart={setShoppingCart} //setState
        />
      </div>
    </DetailContainer>
  );
};
