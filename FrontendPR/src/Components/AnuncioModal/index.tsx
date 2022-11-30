import { formatCurrency } from "../../util/formatCurrency";
import { Box, Content, Cotainer } from "./style";

interface AnuncioModalProps {
  title: string
  description: string
  price: number
  button1?: JSX.Element
  button2?: JSX.Element
  onClick?:() => any;
}

export function AnuncioModal ({title, description, price, onClick, button1}: AnuncioModalProps) {
  return (
    <Cotainer>
      <Box onClick={onClick}>
        <div className="image">
          <img src="https://recicla.club/wp-content/uploads/2021/11/design-blog-37-.png"/>
        </div>
        <Content>
          <h3>{title}</h3>
          <p className="description">
            {description}
          </p>
          <div className="price">{formatCurrency(price)}</div>
          {button1}
        </Content>
      </Box>
    </Cotainer>
  )
}