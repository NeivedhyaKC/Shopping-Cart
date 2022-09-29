import { useEffect } from "react";
import "./Products.css";
import products  from "../products";
import ProductCard from "./ProductCard";

const Products =() =>
{

    return (
        <div>
            
            <div id="ProductsContainer">
                <ProductCard product={products[0]}/>
                <ProductCard product={products[1]}/>
                <ProductCard product={products[3]}/>
                <ProductCard product={products[4]}/>
                <ProductCard product={products[5]}/>            
            </div>
        </div>

    );
}

export default Products;