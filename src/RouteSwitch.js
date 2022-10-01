import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import App from "./App";
import Contacts from "./Components/Contacts";
import Products from "./Components/Products";
import { useState } from "react";

const RouteSwitch = () => {
    const [ productsInCart, setProductsInCart] = useState([]);
    // render={(props) => <MainLayout productsInCart = {productsInCart} />} 
    // render={(props) => <Products setProductInCart={setProductInCart} productsInCart = {productsInCart} /> }

    return (
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>}>
            <Route path="/" element={<App />} />
            <Route path="/Products" element={<Products setProductsInCart={setProductsInCart} productsInCart={productsInCart}/>} />
            <Route path="/Contacts" element={<Contacts/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    );

  };
  
  export default RouteSwitch;