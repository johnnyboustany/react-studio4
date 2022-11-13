// create a component that displays a single bakery item
import React from 'react';

export const BakeryItem = ({updateCart, cart, item}) => {
    // use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    const handleClick = () => {
        updateCart([...cart, item]);
    }
    return (
        <div class ="items">
            <img src={item.image}/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={handleClick}>Add to Your Cart</button>
        </div>
    );
}

export default BakeryItem;
