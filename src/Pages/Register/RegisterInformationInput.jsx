import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterInformationInput = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [isIdValid, setIsIdValid] = useState(null);

  const [password, setPassword] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [isPwValid, setIsPwValid] = useState(null);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [pwConfirmMessage, setPwConfirmMessage] = useState("");
  const [isPwConfirmValid, setIsPwConfirmValid] = useState(null);

  const [postcode, setPostcode] = useState("");
  const [mainAddress, setMainAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const nameChangeHandler = (e) => setName(e.target.value);

  const idChangeHandler = (e) => setId(e.target.value);
  const idBlurHandler = () => {
    const regex = /^[a-z0-9]*$/;
    if (!regex.test(id)) {
      setIdMessage("회원 ID는 영문 및 수자로만 입력 가능합니다.");
      setIsIdValid(false);
    } else if (id.length < 5 || id.length > 15) {
      setIdMessage("아이디는 5자 이상 15자 이하로 입력해주세요.");
      setIsIdValid(false);
    } else {
      setIdMessage("사용 가능한 ID입니다.");
      setIsIdValid(true);
    }
  };

  const pwChangeHandler = (e) => setPassword(e.target.value);
  const pwBlurHandler = () => {
    const lengthValid = password.length >= 9 && password.length <= 15;
    const eng = /[a-zA-Z]/.test(password);
    const num = /[0-9]/.test(password);
    const special = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!lengthValid) {
      setPwMessage("비밀번호는 9자 이상 15자 이하로 입력해주세요.");
      setIsPwValid(false);
    } else if (!(eng && num && special)) {
      setPwMessage("영문, 숫자, 특수문자를 모두 포함해야 합니다.");
      setIsPwValid(false);
    } else {
      setPwMessage("사용 가능한 비밀번호입니다.");
      setIsPwValid(true);
    }
  };

  const pwConfirmChangeHandler = (e) => setPasswordConfirm(e.target.value);
  const pwConfirmBlurHandler = () => {
    if (passwordConfirm === password) {
      setPwConfirmMessage("비밀번호가 일치합니다.");
      setIsPwConfirmValid(true);
    } else {
      setPwConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPwConfirmValid(false);
    }
  };

  const handlePostcodeSearch = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        setPostcode(data.zonecode);
        setMainAddress(data.roadAddress || data.jibunAddress);
      },
    }).open();
  };

  const navigate = useNavigate();

  const buttonRegisterHandler = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (!id.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (!isIdValid) {
      alert(idMessage || "아이디 형식이 올바르지 않습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (!isPwValid) {
      alert(pwMessage || "비밀번호 형식이 올바르지 않습니다.");
      return;
    }
    if (!passwordConfirm) {
      alert("비밀번호 확인을 입력해주세요.");
      return;
    }
    if (!isPwConfirmValid) {
      alert(pwConfirmMessage || "비밀번호 확인이 올바르지 않습니다.");
      return;
    }
    if (!postcode || !mainAddress) {
      alert("주소를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("https://your-api-url.com/register", {
        name,
        id,
        password,
        postcode,
        mainAddress,
        detailAddress,
      });

      if (response.data.success) {
        navigate("/register/finish");
      } else {
        alert(response.data.message || "회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 도중 오류가 발생했습니다.");
    }
  };

  const buttonCancelHandler = () => {
    navigate("/register");
  };

  return (
    <div>
      <form
        className="grid grid-cols-[180px_500px] gap-y-4 border border-gray-300 rounded-md"
        onSubmit={buttonRegisterHandler}
      >
        {/* 이름 */}
        <label
          className="flex items-center border-r border-b border-gray-300 px-4 py-2 font-medium"
          htmlFor="name"
        >
          <span className="text-red-500 mr-1">*</span>이름
        </label>
        <input
          id="name"
          type="text"
          placeholder="이름을 입력하세요"
          className="border-b border-gray-300 px-4 py-2 rounded border border-gray-300"
          value={name}
          onChange={nameChangeHandler}
        />

        {/* 아이디 */}
        <label
          className="flex items-center border-r border-b border-gray-300 px-4 py-2 font-medium"
          htmlFor="id"
        >
          <span className="text-red-500 mr-1">*</span>아이디
        </label>
        <div className="border-b border-gray-300 px-4 py-2">
          <input
            id="id"
            type="text"
            placeholder="아이디 입력"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={id}
            onChange={idChangeHandler}
            onBlur={idBlurHandler}
          />
          <p
            className={`text-sm mt-1 ${
              isIdValid ? "text-green-600" : "text-red-600"
            }`}
          >
            {idMessage}
          </p>
        </div>

        {/* 비밀번호 */}
        <label
          className="flex items-center border-r border-b border-gray-300 px-4 py-2 font-medium"
          htmlFor="password"
        >
          <span className="text-red-500 mr-1">*</span>비밀번호
        </label>
        <div className="border-b border-gray-300 px-4 py-2">
          <input
            id="password"
            type="password"
            placeholder="비밀번호 입력"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={password}
            onChange={pwChangeHandler}
            onBlur={pwBlurHandler}
          />
          <p
            className={`text-sm mt-1 ${
              isPwValid ? "text-green-600" : "text-red-600"
            }`}
          >
            {pwMessage}
          </p>
        </div>

        {/* 비밀번호 확인 */}
        <label
          className="flex items-center border-r border-b border-gray-300 px-4 py-2 font-medium"
          htmlFor="passwordConfirm"
        >
          <span className="text-red-500 mr-1">*</span>비밀번호 확인
        </label>
        <div className="border-b border-gray-300 px-4 py-2">
          <input
            id="passwordConfirm"
            type="password"
            placeholder="비밀번호 재입력"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={passwordConfirm}
            onChange={pwConfirmChangeHandler}
            onBlur={pwConfirmBlurHandler}
          />
          <p
            className={`text-sm mt-1 ${
              isPwConfirmValid ? "text-green-600" : "text-red-600"
            }`}
          >
            {pwConfirmMessage}
          </p>
        </div>

        {/* 연락처 */}
        <label
          className="flex items-center border-r border-b border-gray-300 px-4 py-2 font-medium"
          htmlFor="contactPhone"
        >
          <span className="text-red-500 mr-1">*</span>연락처
        </label>
        <div className="border-b border-gray-300 px-4 py-2 flex flex-col gap-2">
          <input
            id="contactPhone"
            type="text"
            placeholder="휴대전화"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="일반전화"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="이메일"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        {/* 주소 */}
        <label
          className="flex items-center border-r px-4 py-2 font-medium"
          htmlFor="postcode"
        >
          <span className="text-red-500 mr-1">*</span>주소
        </label>
        <div className="px-4 py-2 flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              id="postcode"
              type="text"
              placeholder="우편번호"
              className="flex-1 px-3 py-2 border border-gray-300 rounded"
              value={postcode}
              readOnly
            />
            <button
              type="button"
              className="px-3 py-2 border border-gray-400 rounded bg-gray-100 hover:bg-gray-200"
              onClick={handlePostcodeSearch}
            >
              우편번호 찾기
            </button>
          </div>
          <input
            type="text"
            placeholder="주소"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={mainAddress}
            readOnly
          />
          <input
            type="text"
            placeholder="상세주소"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
        </div>
      </form>

      {/* 버튼 영역 */}
      <div className="flex gap-1 items-center justify-center mt-4">
        <button
          type="submit"
          onClick={buttonRegisterHandler}
          className="flex items-center justify-center w-[250px] h-[50px] bg-red-500"
        >
          <div className="font-black drop-shadow-sm text-xl text-white">
            회원가입
          </div>
        </button>
        <button
          type="button"
          onClick={buttonCancelHandler}
          className="flex items-center justify-center w-[250px] h-[50px] bg-gray-400"
        >
          <div className="font-black drop-shadow-sm text-xl text-white">
            취소
          </div>
        </button>
      </div>
    </div>
  );
};

export default RegisterInformationInput;
