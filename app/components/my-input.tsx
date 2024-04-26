import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  className?: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  type,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor="input"
        className={"w-full block text-[12px] uppercase mb-2 font-medium"}
      >
        {label}
      </label>
      <input
        id="input"
        type={type ? type : "text"}
        className="bg-[#E0E7FF33] w-full py-[12px] px-[15px] rounded-[6px] 
        "
        style={{ border: "1px solid #E0E7FF" }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MyInput;
