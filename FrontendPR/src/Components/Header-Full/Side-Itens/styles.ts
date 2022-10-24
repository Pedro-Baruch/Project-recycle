import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: black; 
  font-size: 20px;
  color: white;
  padding-top: 20px;
  padding-right: 10px;
  cursor: pointer;
  
  > svg {
    margin: 0 10px;
  }
  
  &:hover {
    background-color: #8C8C8C;
  }
`;