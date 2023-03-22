import React, { useState, useEffect } from "react";
import Shop from "./Shop";
import CartItem from "./CartItems";
import ShopIntro from "./ShopIntro";
import Search from "./Search";

function ShopContainer({ arr, priceArr }){
    const [shop, setShop] = useState([]);
    const [cartItem, setCartItem] = useState({});
    const [price, setPrice] = useState(0);
    const [shopBtn, setShopBtn] = useState(true)
    const [search, setSearch] = useState("")
    const url = "http://localhost:3001/items";

    useEffect(() => {
        fetch(`${url}`)
        .then(r => r.json())
        .then(data => setShop(data))
    }, [])

    const filtered = shop.filter((shopItem)=>{
        return shopItem.name.toLowerCase().includes((search.toLowerCase()))
      })

   const items = filtered.map(item => {
    return(
        <div>
            <Shop 
            key={item.id}
            item={item} 
            setCartItem={setCartItem} 
            setPrice={setPrice} 
            />
        </div> 
    )
   })

    return(
        <div>
            <ShopIntro/>
            <Search search={search} setSearch={setSearch}/>
              <div className="all-items-container">
            {items}
            <div className="cart-div">
                <h1 className="cart-title">Shopping Cart</h1>
                <CartItem cartItem={cartItem} arr={arr} priceArr={priceArr} price={price} />
            </div>
        </div>
        </div>
    )
            
        
      
}

export default ShopContainer