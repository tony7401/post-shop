import React from "react";
import { ShoppingCart, CreditCard, Truck } from "lucide-react";

const CartHeader = ({ currentStep = 0 }) => {
  const steps = [
    { label: "장바구니", icon: <ShoppingCart className="w-5 h-5" /> },
    { label: "주문결제", icon: <CreditCard className="w-5 h-5" /> },
    { label: "주문완료", icon: <Truck className="w-5 h-5" /> },
  ];

  return (
    <header className="w-full mt-10 bg-gray-100 flex shadow overflow-visible">
      {steps.map((step, idx) => (
        <div
          key={step.label}
          className={`flex-1 relative flex items-center justify-center gap-1 h-12 text-center font-semibold`}
          style={{
            backgroundColor: currentStep === idx ? "#f76670" : "#f3f4f6",
          }}
        >
          <span
            className={`z-20 flex items-center gap-1 ${
              currentStep === idx ? "text-white" : "text-gray-600"
            }`}
          >
            {step.icon}
            {step.label}
          </span>
        </div>
      ))}
    </header>
  );
};

export default CartHeader;
