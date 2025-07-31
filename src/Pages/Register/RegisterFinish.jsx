import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterFinish = () => {
  const navigate = useNavigate();
  const buttonLoginHandler = (e) => {
    navigate("/login");
  };
  const buttonHomeHandler = (e) => {
    navigate("/home");
  };
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <div>회원가입이 완료되었습니다!</div>
      <div className="flex gap-1 mt-10">
        <button
          className="flex items-center justify-center w-[250px] h-[50px] bg-red-500"
          onClick={buttonLoginHandler}
        >
          <div
            className="font-black drop-shadow-sm text-xl text-white"
            onClick={buttonHomeHandler}
          >
            로그인
          </div>
        </button>
        <button className="flex items-center justify-center w-[250px] h-[50px] bg-gray-400">
          <div className="font-black drop-shadow-sm text-xl text-white">
            홈으로 이동
          </div>
        </button>
      </div>
    </div>
  );
};

export default RegisterFinish;
