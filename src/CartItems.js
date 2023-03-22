import { useState } from "react";

function CartItem({ cartItem, arr, priceArr, price }){

    const [inCart, setInCart] = useState(true) 

    function handleInCart(e){
        setInCart(!inCart)}

    priceArr.push(price)
    arr.push(cartItem)
    let priceTotal = priceArr.reduce((a, b) => a + b);

    const items = arr.map(item => {
        function handleClick(e){
           e.target.remove()
           priceTotal -= parseFloat(item.price)
        }
        return(
            // <div onDoubleClick={(e) => handleClick(e)}> </div>
            <div className="checkout-container">
                <h1 className="item-name"> {item.name} </h1>
                <h1 className="item-name">{item.price}</h1>
                
            </div>
            
                
           
        )
    })
    return(
        <div>
            <h1 className={inCart ? "list-items" : "notInCart"}  onClick={handleInCart}>{items}</h1> 
            <div className="price-container">
            <h1 className="item-price">Total: ${parseFloat(priceTotal).toFixed(2)}</h1>
            </div>
           
        </div>
    )
}

export default CartItem;