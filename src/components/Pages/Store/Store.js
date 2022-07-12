import { useEffect, useState } from "react";
import StoreContenedor from "./StoreContenedor";
import ItemsContenedor from "./ItemsContenedor";
import { Loader } from "../../Loader/Loader";
import { Filter } from "./Filter/Filter";
import { Cards } from "./Cards/Cards";

export const Store = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const [filterProduct, setFilterProduct] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch("data.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }) // crear un archivo con nombre data.json en public // trae el response completo
        .then((resp) => resp.json()) // Extrae la informacion a utilizar de dentro de el response
        .then((data) => {
          setIsLoading(false);
          setProduct(data);
          setFilterProduct(data);
        })
        .catch((err) => console.log(err));
    }, 3000);
    // Setea informacion en nuestro state
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