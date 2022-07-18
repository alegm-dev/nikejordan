import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Counter } from "../../Counter/Counter";
import { Loader } from "../../../../Loader/Loader";
import DetailContainer from "./DetailContainer";
import { ArrowBack } from "../../../../ArrowBack/ArrowBack";
import { getProduct } from "../../../../../services/firestore";

export const ItemDetail = () => {
  const { dateId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [cardDate, setCardDate] = useState([]);

  window.scrollTo(0, 0);

  useEffect(() => {
    setTimeout(() => {
      getProduct(dateId)
        .then((data) => {
          setCardDate(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, 3000);
  }, [dateId]);

  /*Con fetch u filter 
  /*fetch("/data.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          .then(data => data.filter(($data) => $data.id === Number(parms.dateId)) s
        },
      })
        .then((resp) => resp.json())*/
  console.log(cardDate);
  return isLoading ? (
    <Loader />
  ) : (
    <DetailContainer>
      <ArrowBack link="/store" />
      <div className="Box-image">
        <img src={cardDate.image2} alt="imagen de zapatilla jordan" />
        <img src={cardDate.image} alt="imagen de zapatilla jordan" />
      </div>
      <div className="Box-info">
        <h3 className="name">{cardDate.name}</h3>
        <p className="model-color">
          {cardDate.model} ({cardDate.color})
        </p>
        <h4 className="price">
          ${Intl.NumberFormat("es-AR").format(cardDate.price)}
        </h4>
        <p className="descrip">{cardDate.description}</p>
        <Counter
          className="counter"
          stock={cardDate.stock}
          cardDate={cardDate}
        />
      </div>
    </DetailContainer>
  );
};
