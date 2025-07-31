import React, { useState } from "react";
import CartHeader from "./CartHeader";
import Cart from "./Cart";
import CartDummy from "./CartDummy";
import CartPageHeader from "./CartPageHeader";
import CartCategory from "./CartCategory";

const CartPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [items, setItems] = useState([]); // 장바구니 아이템 상태

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
    <div className="min-h-screen w-full flex flex-col items-center p-6">
      <CartPageHeader />
      <CartCategory />
      <div className="w-[65%] flex flex-col items-center">
        <CartHeader currentStep={currentStep} />
        {currentStep === 0 && <Cart items={items} />}
        {currentStep === 1 && <div>주문결제 컴포넌트 자리</div>}
        {currentStep === 2 && <div>주문완료 컴포넌트 자리</div>}
      </div>
      <div
        className="w-[65%] mt-10 p-6 rounded-lg border text-sm leading-relaxed"
        style={{ backgroundColor: "rgb(251, 251, 251)" }}
      >
        <h2 className="text-base font-bold mb-3">장바구니 이용안내</h2>
        <p className="mb-2">
          -장바구니에 담긴 상품은{" "}
          <span className="text-red-500 font-semibold">30일 동안</span>{" "}
          보관됩니다. 더 오랫동안 보관하시려면 '찜리스트' 에 보관해 주세요.
        </p>
        <p className="mb-2">
          -상품은 보관한 시점과 현재 시점간의 차이로 인해 상품의 가격, 판매 여부
          등이 변동될 수 있습니다.
        </p>
        <p>
          -전통시장 상품은{" "}
          <span className="text-red-500 font-semibold">온누리전자상품권</span>{" "}
          으로 주문결제가 가능합니다.
        </p>
      </div>
      <div className="mt-20 w-[70%] flex justify-center">
        <CartDummy onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default CartPage;
