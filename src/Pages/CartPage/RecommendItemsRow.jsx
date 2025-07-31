import React from "react";
import { useNavigate } from "react-router-dom";

const RecommendItemsRow = ({ title, items, onAddToCart }) => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate("/cart/select", { state: { item } });
  };

  return (
    <div className="mb-10">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="flex gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer flex flex-col items-center mt-2"
            onClick={() => handleItemClick(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[140px] h-[140px] object-cover rounded"
            />
            <div className="mt-2 text-center font-medium">{item.name}</div>
            <div className="text-red-500 font-bold text-center">
              {item.price.toLocaleString()}원
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecommendItemsRow;
