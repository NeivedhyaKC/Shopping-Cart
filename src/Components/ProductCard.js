import "./ProductCard.css";

const ProductCard = (props) =>
{

    function AddProductToCart(product)
    {
        if(props.productsInCart.some(productInCart => productInCart === product))
        {
            return;
        }
        if(product.quantity ===undefined)
        {
            product.quantity = 1;
        }
        else
        {
            product.quantity++;
        }
        props.setProductsInCart([...props.productsInCart ,product]);
    }
    return (
        <div className="ProductCard">
            <img src={props.product.image} alt={props.product.name}/>
            <p>{props.product.name}</p>
            <div>${props.product.price}</div>
            <button onClick={() =>AddProductToCart(props.product)}>Add to cart</button>
        </div>
    )
}
export default ProductCard;