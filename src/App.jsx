// App.jsx
import React, { useState } from "react";
import AppRoute from "./Route";

const App = () => {
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

  return <AppRoute items={items} addToCart={addToCart} />;
};

export default App;
