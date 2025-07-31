import React, { useState } from "react";
import CheckAgreement from "./CheckAgreement";
import CustomCheckbox from "./CustomCheckbox";
import { useNavigate } from "react-router-dom";

const RegisterPersonal = () => {
  const [checks, setChecks] = useState({
    all: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
  });

  // 전체 동의 핸들러
  const handleAllChange = () => {
    const newValue = !checks.all;
    setChecks({
      all: newValue,
      a: newValue,
      b: newValue,
      c: newValue,
      d: newValue,
      e: newValue,
      f: newValue,
    });
  };

  // 개별 동의 핸들러
  const handleSingleChange = (key) => {
    const updated = { ...checks, [key]: !checks[key] };
    const allChecked = ["a", "b", "c", "d", "e", "f"].every((k) => updated[k]);
    updated.all = allChecked;
    setChecks(updated);
  };

  const navigate = useNavigate();

  const buttonYes = (e) => {
    if (!checks.a || !checks.b) {
      alert("인터넷 우체국 이용약관 동의는 필수입니다");
    } else {
      navigate("/register/information");
    }
  };

  return (
    <div>
      <div className="ml-[90px]">
        <h3 className="text-3xl font-semibold pt-8">
          <span className="inline-block pb-4 border-b-2 border-black">
            약관
          </span>{" "}
          동의
        </h3>
        <span className="inline-block pt-4">
          인터넷우체국 회원으로 가입을 원하실 경우, 아래의 '이용약관,
          (선택/필수) 개인정보 수집 및 이용, 개인정보 제3자 제공'에 대한 안내를
          읽고 동의여부를 선택하여 주시기 바랍니다.
        </span>

        {/* 전체 동의 */}
        <div className="mt-6 flex items-center gap-2">
          <CustomCheckbox checked={checks.all} onChange={handleAllChange} />
          <span className="text-2xl font-semibold">전체 동의하기</span>
        </div>

        {/* 개별 동의 항목 */}
        <CheckAgreement checks={checks} onCheck={handleSingleChange} />
      </div>
      <div className="flex items-center justify-center gap-2 mt-10">
        <button
          className="flex items-center justify-center w-[250px] h-[50px] bg-red-500"
          onClick={buttonYes}
        >
          <div className="font-black drop-shadow-sm text-xl text-white">
            동의하고 회원가입
          </div>
        </button>
        <button className="flex items-center justify-center w-[250px] h-[50px] bg-gray-400">
          <div className="font-black drop-shadow-sm text-xl text-white">
            동의하지 않음
          </div>
        </button>
      </div>
    </div>
  );
};

export default RegisterPersonal;
