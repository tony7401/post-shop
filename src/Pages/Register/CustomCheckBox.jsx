import React from "react";

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span className="w-[25px] h-[25px] rounded-full flex items-center justify-center border-2 border-gray-300">
        <svg
          className={`w-[20px] h-[20px] transition-colors duration-200 ${
            checked ? "text-red-500" : "text-gray-300"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
    </label>
  );
};

export default CustomCheckbox;
