import React from "react";

const RegisterHeader = () => {
  const stepClass =
    "w-[280px] h-[60px] border px-4 py-2 rounded flex justify-center items-center text-center";

  return (
    <div className="flex flex-col items-start gap-6 mt-[220px] ml-[90px]">
      <h3 className="text-4xl font-bold">회원가입</h3>
      <div className="flex flex-row">
        <div className={stepClass}>회원종류 선택</div>
        <div className={stepClass}>약관동의</div>
        <div className={stepClass}>본인확인</div>
        <div className={stepClass}>정보입력</div>
        <div className={stepClass}>가입완료</div>
      </div>
    </div>
  );
};

export default RegisterHeader;
