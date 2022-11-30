import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  height: 100%;
  position: fixed;
  top: 0; left: 0;
  width: auto;
  animation: showSidebar .4s;
  
  > svg {
    margin : 30px 10px;
    height: 20px;
    width: 20px;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0px;
    }
    to {
      opacity: 1;
      width: auto;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;