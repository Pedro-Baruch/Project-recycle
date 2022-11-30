import styled from "styled-components";

export const Container = styled.div`

  .ProfileUser {
    max-width: 1200px;
    margin: 4rem auto;
    display: flex;
    align-items: center;
    color: #fff;
    background: #333;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 10px;

    .imgUser {
      margin-right: 1%;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;

      }
    }
  }

`

export const Flex = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .image {
    flex: 1 1 40rem;

    img {
     width: 100%;
  
    }
    
    @media (max-width:500px) {
      flex-flow: column;
      width: 40rem;
 
      .image img{
        width: 85%;
        border: none;
      }
    }
    
  }

  .content {
    flex: 1 1 40rem;
    color: #fff;
    padding: 2rem;

    h3 {
      font-size: 2.5rem;
    }

    p {
      padding: 1rem 0;
      line-height: 1.5;
      font-size: 1.2rem;
    }

    .price {
      font-size: 2rem;
      color: #fff;
    }

  }
  
  @media (max-width:500px) {
    flex-direction: column;
    width: 40rem;

    .image img{
      width: 85%;
      border: none;
    }

  }
`