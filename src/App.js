import "./App.css";
import React, { Component }  from 'react';
import { useEffect, useState } from "react";

import bakeryData from "./assets/bakery-data.json";
import BakeryItem from './components/BakeryItem';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

    useEffect(() => {
        let total = 0;
        cart.forEach(element => total = total + element.price);
        setTot(total);
    })

    const [tot, setTot] = useState(0);
    const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <h1>Johnny's Bakery</h1> {/* personalize your bakery (if you want) */}

      <div className="flex-center">
          <div>
              <h2>Cart</h2>
              {cart.map((a, index) =>
                  <p key={index}>{a.name}</p>)}
              <h4>Total Cost: ${Math.round(tot)}</h4>
          </div>

          <div >
              {bakeryData.map((item, index) => ( // map bakeryData to BakeryItem components
                  // replace with BakeryItem component
                  <BakeryItem item={item}
                              updateCart={setCart}
                              total={tot}
                              setTotal={setTot}
                              key={index}
                              cart={cart}/>
              ))}

          </div>
      </div>
    </div>
  );
}

export default App;
