import { Typography } from '@mui/material';
import Link from 'next/link';
import Layout from '../../components/common/Layout';

interface Props {}

function AboutPage() {
  return (
    <Layout>
      <div style={{ textAlign: 'left' }}>
        <Typography variant="h5" color="primary" fontWeight="bold">
          임채동 | 회고 드리븐 | Front-End
        </Typography>
        <h2>💁🏼‍♂️ About me</h2>
        <hr />
        <Typography variant="h5" color="primary" fontWeight="bold">
          Contact.
        </Typography>
        <Typography>📮 chaedong.im.dev@gmail.com</Typography>
        {/* <Typography>📱 Phone : email 부탁드립니다.</Typography> */}
        <Typography variant="h6" color="primary" fontWeight="bold">
          Channel.
        </Typography>
        <Typography sx={linkStyle}>
          <Link href="https://velog.io/@im_chaedong">[회고 블로그 | Velog]</Link>
        </Typography>
        <Typography sx={linkStyle}>
          <Link href="https://chaedies-dev-log.tistory.com/">[기술 블로그 | Tistory]</Link>
        </Typography>
        <br />
        <hr />
      </div>
    </Layout>
  );
}

const linkStyle = { fontWeight: 'bold', color: 'primary.main', cursor: 'pointer' };

export default AboutPage;
