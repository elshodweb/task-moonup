import React from "react";
interface BtnProps {
  children: React.ReactNode;
}

const MyButton: React.FC<BtnProps> = ({ children }) => {
  return (
    <div className="bg-[#2E5BFF] text-white p-[14px] text-center rounded-md font-medium	text-[15px] leading-5">
      {children}
    </div>
  );
};

export default MyButton;
