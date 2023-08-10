import React from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  value?: string | number;
  name: string;
  placeholder: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { type,  value, name, placeholder, disabled, onChange } =
    props;
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className="outline outline-transparent p-2 text-[12px]"
    />
  );
};

export default Input;
