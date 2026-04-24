import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);

  if (showCart) return <CartItem goBack={() => setShowCart(false)} />;

  return (
    <div>
      {!showProducts ? (
        <div>
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList goToCart={() => setShowCart(true)} />
      )}
    </div>
  );
}

export default App;
