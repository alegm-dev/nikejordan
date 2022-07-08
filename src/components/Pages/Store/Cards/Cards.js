import { Details } from "../Details/Details";

export const Cards = ({ item }) => {
  return (
    <>
      <li key={item.id}>
        <div className="card">
          <div className="imgBox">
            <img className="shoes" src={item.image} alt="zapatillas jordan" />
            <img className="shoes" src={item.image2} alt="zapatillas jordan" />
          </div>
          <div className="contentBox">
            <h3 className="name">{item.name}</h3>
            <Details item={item} />
          </div>
        </div>
      </li>
    </>
  );
};
