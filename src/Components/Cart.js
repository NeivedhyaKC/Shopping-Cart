import "./Cart.css"

const Cart = () =>
{

    function CloseCart()
    {
        document.querySelector("#CartContainer").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
    }
    return (
    <div id="CartContainer">   
        <p>Your Shopping Cart</p>
        <div></div>
        <p>Total : $0.00</p>
        <button id="CheckoutBtn">Checkout</button>
        <button id="CloseBtn" onClick={CloseCart}>Close</button>
    </div>);
}

export default Cart;