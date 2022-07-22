import { useEffect, useState } from "react";
import StoreContenedor from "./StoreContenedor";
import ItemsContenedor from "./ItemsContenedor";
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

  /* Firebase fetch
useEffect(()=>{
  const db = getFirestore();

  const productRef = query(colecction(db,'products'), where('id','==), parms.id)))
                     
  
  getDocs(productRef).then(snapshot)=> {
      setProduct(snapshot.docs.map(doc => doc.data()))
      setProduct(snapshot.docs.map(doc => doc.data().id === params.id &&oc.data())) //para details
  })
},[])
  
  */

  /* Con fetch
  
  fetch("data.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      
 */ return isLoading ? (
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
