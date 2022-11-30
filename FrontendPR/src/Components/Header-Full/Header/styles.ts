
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: white;
  width: 100%;
  height: 10%;
  background-color: black;
  position: fixed;
  top: 0; left: 0;
  z-index: 1000;
  padding: .5rem;

  .setSiderbar{
    display: flex;  
  }



  > svg {
    color : white;
    margin : 30px 10px;
    height: 20px;
    width: 20px;
  }
`;
