import React from "react";

const Cart = ({ items }) => {
  if (!items || items.length === 0) {
    return <div className="text-center mt-10">장바구니가 비었습니다.</div>;
  }

  return (
    <div className="w-full mt-8">
      <h2 className="text-xl font-bold mb-4">장바구니 목록</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-md shadow-sm"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">수량: {item.quantity}</p>
            </div>
            <p className="font-bold">{item.price.toLocaleString()}원</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
