import React from "react";
import "./styles.css";

interface Props {
  children?: React.ReactNode;
  height: string;
  width: string;
  onClick?:() => any;
}

const Button: React.FC<Props> = ({ children, height, width,onClick }) => {
  return (
    <button
      className="Buttons"
      onClick={onClick}
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
