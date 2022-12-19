import styled from '@emotion/styled';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import metadata from '../../../data/metadata';
import NavBar from '../NavBar';

interface Props {}

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <Container>
        <div>{children}</div>
      </Container>
    </div>
  );
}

export default Layout;

const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 16px;
`;
