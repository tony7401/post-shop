import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage/CartPage";

const AppRoute = () => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setItems((prevItems) => {
      const exist = prevItems.find((i) => i.id === item.id);
      if (exist) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<CartPage items={items} addToCart={addToCart} />}
      />
    </Routes>
  );
};

export default AppRoute;
