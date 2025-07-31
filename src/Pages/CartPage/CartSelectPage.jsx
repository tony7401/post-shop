import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CartSelectPage = ({ onAddToCart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  if (!item) {
    return <div className="p-10 text-center">상품 정보가 없습니다.</div>;
  }

  const handleAddCart = () => {
    if (onAddToCart) {
      onAddToCart(item);
    }
    alert("장바구니에 담았습니다");
    navigate("/cart");
  };

  const handleBuyNow = () => {
    alert("바로 구매 로직 연결 예정");
  };

  const handleWishList = () => {
    alert("찜하기 로직 연결 예정");
  };

  const handleMobileOrder = () => {
    alert("모바일 주문 로직 연결 예정");
  };

  const handleMultiShipping = () => {
    alert("복수배송지 주문 로직 연결 예정");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-10 items-start min-h-screen">
      {/* 왼쪽: 이미지 */}
      <img
        src={item.image}
        alt={item.name}
        className="w-[400px] h-[400px] object-cover rounded"
      />

      {/* 오른쪽: 상품 정보 + 버튼 */}
      <div className="flex flex-col flex-1">
        {/* 상품 정보 */}
        <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
        <p className="text-xl font-semibold text-red-500 mb-6">
          {item.price.toLocaleString()}원
        </p>

        <div className="space-y-2 text-gray-700 text-sm mb-8">
          <p>공급업체: 예시업체</p>
          <p>원산지: 대한민국</p>
          <p>배송정보: 택배배송 / 2~3일 소요</p>
          <p>배송비: 3,000원 (5만원 이상 무료)</p>
          <p>구매수량: 1개</p>
          <p>총수량: 1개</p>
          <p>총 주문금액: {item.price.toLocaleString()}원</p>
        </div>

        {/* 버튼 영역 */}
        <div className="flex gap-6 items-start">
          {/* 바로구매 버튼 */}
          <button
            onClick={handleBuyNow}
            className="bg-red-600 text-white px-10 py-5 rounded text-xl font-bold h-[110px] flex items-center justify-center"
          >
            바로 구매
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleAddCart}
              className="bg-orange-500 text-white px-4 py-3 rounded w-[140px] text-sm font-semibold whitespace-nowrap h-[50px]"
            >
              장바구니
            </button>
            <button
              onClick={handleWishList}
              className="bg-gray-300 text-black px-4 py-3 rounded w-[140px] text-sm font-semibold whitespace-nowrap h-[50px]"
            >
              찜하기
            </button>
            <button
              onClick={handleMobileOrder}
              className="bg-yellow-400 text-black px-4 py-3 rounded w-[140px] text-sm font-semibold whitespace-nowrap h-[50px]"
            >
              모바일 주문
            </button>
            <button
              onClick={handleMultiShipping}
              className="bg-purple-600 text-white px-4 py-3 rounded w-[140px] text-sm font-semibold whitespace-nowrap h-[50px]"
            >
              복수배송지 주문
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSelectPage;
