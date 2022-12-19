import styled from '@emotion/styled';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <Container>
      <div>
        <Link href={FOOTER_INFO.githubUrl}>
          <GitHub />
        </Link>
        <Link href={FOOTER_INFO.linkedinUrl}>
          <LinkedIn />
        </Link>
      </div>
      <p>Copyright &copy; 2022. Chaedie</p>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  div {
    padding: 1rem;
    text-align: center;
    border-top: 1px solid grey;
    min-width: 200px;
    max-width: 200px;
  }
`;

const FOOTER_INFO = {
  githubUrl: 'https://github.com/chaedie',
  linkedinUrl: 'https://www.linkedin.com/in/chaedong-im-chaedie-40247623b/',
};
