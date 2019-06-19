import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;

  grid-template-columns: 3fr 1fr;
  grid-template-rows: 70vh 30vh;

  background: #393B52;
  color: #fff;
`;

export const CanvasGrid = styled.div`
  grid-column: 1 / 2;

  canvas: {
    width: 100%;
  }
`;

export const SideBarGrid = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / -1;
`;

export const FooterGrid = styled.div`
  grid-column: 1 / 2;
`;

export const ChatRow = styled.li`
  margin: 5px;
  color: #333;

  span {
    display: block;
    border-radius: 40px;
    background: #f9f9f9;
    font-size: 1.5rem;
    width: 60%;

    img {
      width: 60px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }

  div {
    background: #f2f2f2;
    border-radius: 10px;
    margin: 10px;
    padding:15px;
  }

`