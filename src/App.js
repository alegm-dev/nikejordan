import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { Store } from "./components/Pages/Store/Store";
import { Home } from "./components/Pages/Home/Home";
import { ItemDetail } from "./components/Pages/Store/Details/ItemDetail/ItemDetail";
import { ShoppingList } from "./components/NavBar/Profile/ShoppingCart/ShoppingList/ShoppingList";
import { useState } from "react";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  //Estado del carrito

  return (
    <div className="App">
      <Navbar
        shoppingCart={shoppingCart} //state
        setShoppingCart={setShoppingCart} //setState
      />
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/home" />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/airjordan" /*element={<Airjordan />}*/></Route>
        <Route exact path="/store" element={<Store />}></Route>
        <Route exact path="/contact" /*element={<Contact />}*/></Route>
        <Route
          exact
          path="/itemDetail/:dateId"
          element={
            <ItemDetail
              shoppingCart={shoppingCart} //state
              setShoppingCart={setShoppingCart} //setState
            />
          }
        ></Route>
        <Route exact path="/login" /*element={<Login />}*/></Route>
        <Route exact path="/shoppingList" element={<ShoppingList />}></Route>
        <Route exact path="*" /*element={<NotFound />}*/></Route>
      </Routes>
    </div>
  );
};

export default App;
