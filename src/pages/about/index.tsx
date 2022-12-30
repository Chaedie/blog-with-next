import { Typography } from '@mui/material';
import Link from 'next/link';

function AboutPage() {
  return (
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
      <Typography variant="h6" color="primary" fontWeight="bold">
        Channel.
      </Typography>
      <Typography sx={linkStyle}>
        <Link href="https://velog.io/@im_chaedong">[회고 블로그 | Velog]</Link>
      </Typography>
      <Typography sx={linkStyle}>
        <Link href="https://chaedies-dev-log.tistory.com/">[기술 블로그 | Tistory]</Link>
      </Typography>
      <hr />
      <br />
      <img src="https://leetcard.jacoblin.cool/chaedie?ext=heatmap&theme=unicorn" alt="LeetCode Heatmap" />
    </div>
  );
}

const linkStyle = { fontWeight: 'bold', color: 'primary.main', cursor: 'pointer' };

export default AboutPage;
