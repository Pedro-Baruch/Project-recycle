import React from "react";
import './styles.css'
interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  height: string;
  width: string;
}

const Button: React.FC<Props> = ({ 
    
    children,
    onClick,
    height,
    width
    
    
  }) => { 
  return (
    <button className="Buttons"
      onClick={onClick}
      style={{
        height,
        width
     }}
    >
    {children}
    </button>
  );
}

export default Button;