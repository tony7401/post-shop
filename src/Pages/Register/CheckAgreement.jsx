import React from "react";
import CustomCheckbox from "./CustomCheckbox";

const CheckAgreement = ({ checks, onCheck }) => {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">필수 동의항목</h3>
        <div className="flex itmes-center gap-1">
          <CustomCheckbox
            checked={checks.a}
            onChange={() => onCheck("a")}
            className="relative top-1"
          />
          <span>인터넷우체국 이용약관[인터넻우체국 이용약관 내용보기]</span>
        </div>
        <div className="flex itmes-center gap-1">
          <CustomCheckbox
            checked={checks.b}
            onChange={() => onCheck("b")}
            className="relative top-1"
          />
          <span>
            개인정보 수집 및 이용[개인정보 수집 및 이용 동의 내용보기]
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">선택 동의항목</h3>
        <div className="flex itmes-center gap-1">
          <CustomCheckbox
            checked={checks.c}
            onChange={() => onCheck("c")}
            className="relative top-1"
          />
          <span>개인정보 제3자 제공[개인정보 제3자 제공 동의 내용보기]</span>
        </div>
        <div className="flex itmes-center gap-1">
          <CustomCheckbox
            checked={checks.d}
            onChange={() => onCheck("d")}
            className="relative top-1"
          />
          <span>홍보목적 개인정보 수집 이용</span>
        </div>
        <div className="flex itmes-center gap-1">
          <CustomCheckbox
            checked={checks.e}
            onChange={() => onCheck("e")}
            className="relative top-1"
          />
          <span>나의 우편물 배달 사전안내 서비스</span>
        </div>
        <div className="flex itmes-center gap-1">
          <CustomCheckbox
            checked={checks.f}
            onChange={() => onCheck("f")}
            className="relative top-1"
          />
          <span>모바일 우편함 서비스</span>
        </div>
      </div>
    </div>
  );
};

export default CheckAgreement;
