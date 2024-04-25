import React from "react";
interface BtnProps {
  children: React.ReactNode;
  type?:'button'|'submit'|'reset';
}

const MyButton: React.FC<BtnProps> = ({ children, type }) => {
  return (
    <button className="bg-[#2E5BFF] block w-full text-white p-[14px] text-center rounded-md font-medium	text-[15px] leading-5">
      {children}
    </button>
  );
};

export default MyButton;
