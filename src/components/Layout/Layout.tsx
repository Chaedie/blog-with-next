import styled from '@emotion/styled';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import metadata from '../../data/metadata';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }: PropsWithChildren) {
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

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.25rem 1rem;
  font-size: 16px;
`;
