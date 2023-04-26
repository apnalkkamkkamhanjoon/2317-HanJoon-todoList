import React from "react";
import "../styles/Main.css";

type InputProps = {
  text: string;
};

const Input = ({ text }: InputProps) => {
  return (
    <div>
      <input placeholder="할 일을 입력해주세요." className="input" />
    </div>
  );
};

export default Input;
