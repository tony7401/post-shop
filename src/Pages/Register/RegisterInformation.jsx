import React from "react";
import RegisterInformationInput from "./registerInformationInput";

const RegisterInformation = () => {
  return (
    <div className="ml-[90px] mt-[40px]">
      <h3 className="font-semibold text-2xl">
        <span className="inline border border-b-2 border-b-black  pb-3">
          개인
        </span>
        회원 정보입력
      </h3>
      <div className="flex flex-col gap-2">
        <h2 className="mt-8 text-lg font-medium">기본정보</h2>
        <span>
          <span className="text-red-500">*</span>표시는 필수 입력
        </span>
      </div>
      <RegisterInformationInput />
    </div>
  );
};

export default RegisterInformation;
