"use client";
import { useState } from "react";
import { FieldError } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type InputProps = {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  error?: FieldError;
  register: any;
};

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  id,
  placeholder,
  error,
  register,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [typeState, setTypeState] = useState(type);
  const isPassword = type === "password";

  const passwordIcon = () => {
    setShowPassword(!showPassword);
    if (typeState === "password") {
      setTypeState("text");
    } else if (typeState === "text") {
      setTypeState("password");
    }
  };

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={typeState}
        id={id}
        placeholder={placeholder}
        {...(register ? register(id) : {})}
        className={`w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-blue-500"
        }`}
      />
      {isPassword && (
        <div
          className="absolute right-3 top-[33px] text-gray-500 cursor-pointer"
          onClick={passwordIcon}
        >
          {showPassword ? (
            <AiFillEyeInvisible size={20} />
          ) : (
            <AiFillEye size={20} />
          )}
        </div>
      )}
      {error && <p className="text-red-500 text-xs">{error?.message}</p>}
    </div>
  );
};
