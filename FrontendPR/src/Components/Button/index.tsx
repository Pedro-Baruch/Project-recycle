import React from "react";
import "./styles.css";

interface Props {
  children?: React.ReactNode;
  height: string;
  width: string;
}

const Button: React.FC<Props> = ({ children, height, width }) => {
  return (
    <button
      className="Buttons"
      style={{
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
