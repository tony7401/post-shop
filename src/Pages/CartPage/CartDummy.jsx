import React from "react";
import RecommendItemsRow from "./RecommendItemsRow";

const CartDummy = ({ onAddToCart }) => {
  const togetherItems = [
    { id: 1, name: "딸기우유", price: 1800, image: "/images/item1.jpg" },
    { id: 2, name: "소세지", price: 2500, image: "/images/item2.jpg" },
    { id: 3, name: "사과", price: 3000, image: "/images/item3.jpg" },
    { id: 4, name: "식빵", price: 2000, image: "/images/item4.jpg" },
    { id: 5, name: "오렌지", price: 3500, image: "/images/item5.jpg" },
    { id: 6, name: "도시락", price: 4000, image: "/images/item6.jpg" },
  ];

  const specialItems = [
    { id: 7, name: "초코파이", price: 1200, image: "/images/item7.jpg" },
    { id: 8, name: "컵라면", price: 1000, image: "/images/item8.jpg" },
    { id: 9, name: "우유", price: 1500, image: "/images/item9.jpg" },
    { id: 10, name: "생수", price: 800, image: "/images/item10.jpg" },
    { id: 11, name: "김밥", price: 3000, image: "/images/item11.jpg" },
    { id: 12, name: "햄버거", price: 5000, image: "/images/item12.jpg" },
  ];

  return (
    <div className="w-full">
      <RecommendItemsRow
        title="다른 분들이 함께 담은 상품이에요"
        items={togetherItems}
        onAddToCart={onAddToCart}
      />
      <RecommendItemsRow
        title="매일 특가, 쇼핑 25시"
        items={specialItems}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default CartDummy;
