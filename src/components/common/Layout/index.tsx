import styled from '@emotion/styled';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import metadata from '../../../data/metadata';
import NavBar from '../NavBar';
import Footer from './Footer';

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
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}

export default Layout;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0.25rem 1rem;
  font-size: 16px;
`;
