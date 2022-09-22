import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import App from "./App";
import Contacts from "./Components/Contacts";
import Products from "./Components/Products";

const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>} >
            <Route path="/" element={<App />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Contacts" element={<Contacts/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    );

  };
  
  export default RouteSwitch;