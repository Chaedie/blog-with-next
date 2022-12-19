import { ArrowBack, ArrowRightRounded, Code } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Layout from '../../components/common/Layout';

interface Props {}

function AboutPage() {
  return (
    <Layout>
      <Typography variant="h4" color="primary" fontWeight="bold">
        임채동 | Front-End | 회고 드리븐
      </Typography>
      <h2>💁🏼‍♂️ About me</h2>
      <hr />
      <Typography variant="h5" color="primary" fontWeight="bold">
        Contact.
      </Typography>
      <Typography>📮 E-mail : chaedong.im.dev@gmail.com</Typography>
      <Typography>📱 Phone : email 부탁드립니다.</Typography>
      <Typography variant="h6" color="primary" fontWeight="bold">
        Channel.
      </Typography>
      <Typography sx={linkStyle}>
        <Link href={'https://github.com/chaedie'}>[깃허브 | GitHub]</Link>
      </Typography>
      <Typography sx={linkStyle}>
        <Link href="https://velog.io/@im_chaedong">[회고 블로그 | Velog]</Link>
      </Typography>
      <Typography sx={linkStyle}>
        <Link href="https://chaedies-dev-log.tistory.com/">[기술 블로그 | Tistory]</Link>
      </Typography>
      <br />
      <hr />
    </Layout>
  );
}

const linkStyle = { fontWeight: 'bold', color: 'primary.main', cursor: 'pointer' };

export default AboutPage;
