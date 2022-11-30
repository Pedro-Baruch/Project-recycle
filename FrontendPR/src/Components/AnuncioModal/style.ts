import styled from "styled-components";

export const Cotainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

`;

export const Box = styled.div`
  margin: 1.5rem;
  padding: 1rem;
  width: 50rem;
  background: #333;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .image {
    padding: 1rem;
  }

  .image img {
    padding: 0 3rem;
    width: 25rem;
    border-right: .1rem solid #ccc;
  }

  @media (max-width:500px) {
    flex-flow: column;
    width: 40rem;

    .image img{
      width: 85%;
      border: none;
    }

  }
`
export const Content = styled.div`
  padding: 1rem;
  width: 50%;

  h3 {
    font-size: 2rem;
    color: #fff;
  }

  p {
    font-size: 1.2rem;
    color: #eee;
    padding: 1rem 0;
  }

  .price {
    font-size: 1.7rem;
    color: #fff;
  }

  .bnt {
    padding: .6rem 3rem;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    border: none;
    background: linear-gradient(90deg, #637CBB, #485E95);
    color: #fff;
  }

  @media (max-width:500px) {
    width: 100%;
  }
`