import styled from '@emotion/styled';
import { GitHub } from '@mui/icons-material';
import Head from 'next/head';
import Link from 'next/link';
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
      <Container>
        <div className="containerBox">{children}</div>
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;

const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 16px;

  .containerBox {
    width: 700px;
  }
`;
