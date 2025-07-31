import React, { useState } from "react";
import PostLogo from "../../assets/images/post-logo.png";
import { useNavigate } from "react-router-dom";
import { Power, ShoppingCart, UserRound, Search } from "lucide-react";
const CartPageHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/login");
  };
  const [text, setText] = useState("");
  const textChangeHandler = (e) => {
    setText(e.target.value);
  };
  const commonButtonClass =
    "flex flex-col items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-800 bg-transparent ";

  return (
    <div className="w-full flex justify-center">
      {/* 내부 컨테이너: 전체를 70%로 고정 */}
      <div
        className="w-full flex flex-row items-center justify-between"
        style={{ paddingLeft: "120px", paddingRight: "120px" }}
      >
        <div className="flex justify-start items-center">
          <button
            onClick={handleLogoClick}
            className="w-[200px] h-[80px] p-0 border-none bg-transparent flex justify-start items-start"
          >
            <img
              src={PostLogo}
              alt="로고"
              className="w-[200px] h-[80px] object-contain"
            />
          </button>
        </div>
        <div className="relative w-[500px]">
          <input
            className="flex pl-4 pr-12 w-[500px] h-10 border-b-2 border-red-500 focus:outline-none"
            type="text"
            value={text}
            onChange={textChangeHandler}
            placeholder="한줄메모 입력"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent text-red-500">
            <Search size={30} />
          </button>
        </div>
        <div className="flex flex-row">
          <button className={commonButtonClass}>
            <Power />
            로그아웃
          </button>
          <button className={commonButtonClass}>
            <ShoppingCart />
            장바구니
          </button>
          <button className={commonButtonClass}>
            <UserRound />
            나의쇼핑
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPageHeader;
