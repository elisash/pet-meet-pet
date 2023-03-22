import React from "react";

function Shop({item, setCartItem, setPrice }){

    function handleClick(){
       setPrice(parseFloat(item.price))
       setCartItem({
        id:item.id,
        name:item.name,
        price:item.price
       })
    }



    return(
    <div>
        <div className="shop-container">
            <img className="shop-image" src={item.image}/>
            <h2 className="shop-name" >{item.name}</h2>
            <p className="shop-price">${item.price}</p>
            <button onClick={handleClick} className="add-to-cart-btn">Add to cart</button>
        </div>
    </div>
    )
}

export default Shop;