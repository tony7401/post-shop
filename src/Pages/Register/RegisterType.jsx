// RegisterType.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterType = () => {
  const typeClass =
    "w-[500px] h-[300px] bg-[rgb(251,251,251)] border border-t-gray-700 border-l-gray-300 border-r-gray-300 border-b-gray-300 pl-2 flex flex-col gap-6";

  const registerButton =
    "w-[150px] h-[30px] bg-white border border-black mt-[110px] flex items-center justify-center";

  const navigate = useNavigate();

  const registerPersonalHandler = (e) => {
    navigate("/register/Personal");
  };

  return (
    <div className="w-full mt-[80px] ml-[180px] pb-[100px]">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold ">
          <sapn className="pb-6 border-b-2 border-black">회원</sapn>종류 선택
        </h3>
        <span className="pt-8 pb-20">
          회원종류별로 가입절차에 차이가 있으니 고객님꼐 해당하는 경우를
          선택하여 가입하여 주시기 바랍니다.
        </span>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className={typeClass}>
          <div>개인회원</div>
          <span>
            만 14세 이상의 내국인 <br /> (사업자등록번호가 없는 개인사업자도
            포함)
          </span>
          <button className={registerButton} onClick={registerPersonalHandler}>
            가입하기
          </button>
        </div>
        <div className={typeClass}>
          <div>사업자회원</div>
          <span>
            사업자등록번호가 있는 사업자 <br /> (영리/비영리법인, 국가/지자체,
            개인사업자)
          </span>
          <button className={registerButton}>가입하기</button>
        </div>
        <div className={typeClass}>
          <div>외국인</div>
          <span>
            국내에 거주하는 외국인 <br /> (외국인등록번호가 있어야 회원가입
            가능)
          </span>
          <button className={registerButton}>가입하기</button>
        </div>
        <div className={typeClass}>
          <div>아동회원</div>
          <span>
            만 14세 미만의 아동 <br />
            (반드시 법정 대리인 동의를 거쳐야함)
          </span>
          <button className={registerButton}>가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterType;
