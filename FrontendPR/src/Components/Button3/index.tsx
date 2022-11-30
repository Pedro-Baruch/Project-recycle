import { Bnt } from "./style";

interface ButtonProps {
  name: string
  onClick?:() => any;
}

export function Button3({name, onClick}: ButtonProps) {
  return (
    <Bnt>
      <button className="bnt"
        onClick={onClick}
      >
        {name}
      </button>
    </Bnt>
  )
}