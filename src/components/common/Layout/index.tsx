import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import NavBar from '../NavBar';

interface Props {}

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <NavBar />
      <Container>
        <div>{children}</div>
      </Container>
    </div>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
  font-size: 16px;
`;
