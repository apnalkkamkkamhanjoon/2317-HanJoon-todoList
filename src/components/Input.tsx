import React from "react";
import "../styles/Main.css";

type InputProps = {
  text: string;
  onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const Input = ({ text, onKeyDown, onChange }: InputProps) => {
  return (
    <input
      placeholder="enter the content and press Enter"
      className="input"
      onChange={onChange}
      value={text}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
