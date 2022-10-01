import "./Cart.css";
import uniqid from "uniqid";

const Cart = (props) =>
{
    let sum = 0;
    for (const product of props.productsInCart) 
    {
        sum +=product.price * product.quantity;
    }

    function AddItemToCart(product)
    {
        props.productsInCart.forEach((productInCart) => product === productInCart? productInCart.quantity++: null);
        props.setProductsInCart([...props.productsInCart]);
    }
    function RemoveItemFromCart(product)
    {
        props.productsInCart.forEach((productInCart) =>
        {
            if(product === productInCart)
            {
                if(productInCart.quantity <= 1 )
                {
                    props.productsInCart.splice(props.productsInCart.indexOf(productInCart),1);
                } 
                else
                {
                    productInCart.quantity--;
                }
            }
        })
        props.setProductsInCart([...props.productsInCart]);
    }
    return (
    <div id="CartContainer">   
        <p>Your Shopping Cart</p>
        <div className="ItemContainer">
            {
                props.productsInCart.map((productInCart) => 
                (
                    <div className="CartItemDiv">
                        <img className="CartItemImg" src={productInCart.image} alt={productInCart.name}></img>
                        <div>
                            <div className="CartItemName" key={uniqid()}>{productInCart.name}</div>
                            <div key={uniqid()}>${productInCart.price}</div>
                            <div className="CartItemQuantityDiv">
                                <button onClick={() =>RemoveItemFromCart(productInCart)}>-</button>
                                <p>
                                    {
                                        // props.productsInCart.map(p =>  p ===productInCart ? pSum++:null)
                                        productInCart.quantity
                                    }
                                </p>
                                <button onClick={() =>AddItemToCart(productInCart)}>+</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <p>Total : ${sum}</p>
        <button id="CheckoutBtn">Checkout</button>
        <button id="CloseBtn" onClick={props.CloseCart}>Close</button>
    </div>);
}

export default Cart;