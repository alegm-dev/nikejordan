import { useEffect, useState } from "react";
import StoreContenedor from "./StoreContenedor";
import ItemsContenedor from "./ItemsContenedor";
import { Details } from "./Details/Details";
import { Category } from "./Category/Category";
import { Loader } from "../../Loader/Loader";

export const Store = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch("data.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }) // crear un archivo con nombre data.json en public // trae el response completo
        .then((resp) => resp.json()) // Extrae la informacion a utilizar de dentro de el response
        .then((data) => {
          setIsLoading(false);
          setProduct(data);
        })
        .catch((err) => console.log(err));
    }, 3000);
    // Setea informacion en nuestro state
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <StoreContenedor>
      <ItemsContenedor>
        <h2 className="title-store">AIR</h2>
        <ul className="sneakers">
          {product &&
            product.map((item) => {
              return (
                <li key={item.id}>
                  <div className="card">
                    <div className="imgBox">
                      <img
                        className="shoes"
                        src={item.image}
                        alt="zapatillas jordan"
                      />
                      <img
                        className="shoes"
                        src={item.image2}
                        alt="zapatillas jordan"
                      />
                    </div>
                    <div className="contentBox">
                      <h3 className="name">{item.name}</h3>
                      <Details item={item} />
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </ItemsContenedor>
    </StoreContenedor>
  );
};
