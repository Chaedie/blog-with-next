import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

interface Props {}

export default function Introduction() {
  return (
    <div>
      <h1>Introduction</h1>
      <p>안녕하세요, FE개발자 임채동입니다.</p>
      <br />
      <ImageContainer>
        <Image src={PROFILE_IMG} alt="Front-End Developer Profile Image" width={200} height={200} />
      </ImageContainer>
      <p>이 블로그는 Next.js 학습, 기록용입니다. 이력서, Portfolio, 포스팅 등을 올릴 예정입니다.</p>
      <p>재밌게 구경하시고 다음에 또 만나요~!</p>
    </div>
  );
}

const ImageContainer = styled.div`
  img {
    border-radius: 50% !important;
  }
`;
const PROFILE_IMG =
  'https://avatars.githubusercontent.com/u/88099590?s=400&u=82fc282f6e391c704573afd52c7e4535e77ef89f&v=4';
