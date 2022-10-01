import "./Products.css";
import products  from "../products";
import ProductCard from "./ProductCard";
import uniqid from "uniqid";

const Products =(props) =>
{
    return (
        <div>
            
            <div id="ProductsContainer">
                {
                    products.map((product) =>
                    (
                        <ProductCard key ={uniqid()} product={product} setProductsInCart = {props.setProductsInCart} 
                            productsInCart ={props.productsInCart}/>
                    ))
                }    
            </div>
        </div>
    );
}

export default Products;