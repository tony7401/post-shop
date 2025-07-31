import React from "react";
import "../../index.css"; // category-button 클래스가 여기 있다고 가정

const CartCategory = () => {
  const categories = [
    "전체 카테고리",
    "Ai추천",
    "베스트",
    "특가",
    "특산물",
    "제철",
    "꽃배달",
    "전통시장",
    "생활용품",
    "헬스케어",
    "군장병관",
    "기획전",
    "여름세일",
    "이벤트",
    "지역브랜드관",
  ];

  // 초록색 적용할 항목들
  const greenItems = ["여름세일", "이벤트", "지역브랜드관"];

  return (
    <div className="flex justify-center flex-row flex-wrap gap-2 w-full border-y-2 py-2">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-button ${
            greenItems.includes(category) ? "text-green-600" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CartCategory;
