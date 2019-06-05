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
