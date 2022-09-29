import "./ProductCard.css";

const ProductCard = (props) =>
{
    return (
        <div className="ProductCard">
            <img src={props.product.image} alt={props.product.name}/>
            <p>{props.product.name}</p>
            <div>${props.product.price}</div>
            <button>Add to cart</button>
        </div>
    )
}
export default ProductCard;