import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: #1A202C; 
  
  > svg {
    position: fixed;
    color: blue;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    padding: 30px 15px;
  }
`;
