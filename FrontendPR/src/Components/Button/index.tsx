import React from "react";
import "./styles.css";

interface Props {
  children?: React.ReactNode;
  height: string;
  width: string;
  onClick?:any;
}

const Button: React.FC<Props> = ({ children, height, width }) => {
  return (
    <button
      className="Buttons"
      style={{
        height,
        width,
        
      }}
      onClick={()=>{}}
    >
      {children}
    </button>
  );
};

export default Button;
