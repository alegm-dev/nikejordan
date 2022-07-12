import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { Store } from "./components/Pages/Store/Store";
import { Home } from "./components/Pages/Home/Home";
import { ItemDetail } from "./components/Pages/Store/Details/ItemDetail/ItemDetail";
import { ShoppingList } from "./components/NavBar/Profile/ShoppingCart/ShoppingList/ShoppingList";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate replace to="/home" />}
            ></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/airjordan" /*element={<Airjordan />}*/></Route>
            <Route exact path="/store" element={<Store />}></Route>
            <Route exact path="/contact" /*element={<Contact />}*/></Route>
            <Route
              exact
              path="/itemDetail/:dateId"
              element={<ItemDetail />}
            ></Route>
            <Route exact path="/login" /*element={<Login />}*/></Route>
            <Route
              exact
              path="/shoppingList"
              element={<ShoppingList />}
            ></Route>
            <Route exact path="*" /*element={<NotFound />}*/></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
};

export default App;
