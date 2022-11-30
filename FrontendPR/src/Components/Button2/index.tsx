import { Bnt } from "./style";

interface ButtonProps {
  name: string
  onClick?:() => any;
}

export function Button2({name, onClick}: ButtonProps) {
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