import { useEffect, useState } from "react";
import StoreContenedor from "./Styled/StoreContenedor";
import ItemsContenedor from "./Styled/ItemsContenedor";
import { Loader } from "../../Loader/Loader";
import { Filter } from "./Filter/Filter";
import { Cards } from "./Cards/Cards";
import { getAllProducts } from "../../../services/firestore";

export const Store = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const [filterProduct, setFilterProduct] = useState();

  useEffect(() => {
    setTimeout(() => {
      getAllProducts()
        .then((data) => {
          setIsLoading(false);
          setProduct(data);
          setFilterProduct(data);
        })
        .catch((err) => console.log(err));
    }, 3000);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <StoreContenedor>
      <h2 className="title-store">AIR</h2>
      <ItemsContenedor>
        <Filter product={product} setFilterProduct={setFilterProduct} />
        <ul className="sneakers">
          {filterProduct.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </ul>
      </ItemsContenedor>
    </StoreContenedor>
  );
};
