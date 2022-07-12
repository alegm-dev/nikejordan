import { useState } from "react";
import { CounterIcon } from "../../../../Pages/Store/Counter/CounterIcon";
import { GrSubtract } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";

export const CounterCart = ({ quantity, stock }) => {
  const [numCounter, setNumCounter] = useState(quantity);

  console.log(numCounter + " countercart");
  console.log(quantity + "quantity");

  const addProduct = () => {
    if (numCounter < stock) {
      setNumCounter(numCounter + 1);
    }
  };

  const SubtractProduct = () => {
    if (numCounter > 0) {
      setNumCounter(numCounter - 1);
    }
  };

  return (
    <>
      <>
        <CounterIcon Icon={<GrSubtract onClick={SubtractProduct} />} />
        <h4>{numCounter}</h4>
        <CounterIcon Icon={<GrAdd onClick={addProduct} />} />
        <p className="stock">Stock disponible: {stock}</p>
      </>
    </>
  );
};
