import { Button } from '@mui/material';
import Layout from '../components/common/Layout';
import Introduction from '../components/Introduction';
import PostList from '../components/posts/PostList';

export default function Home() {
  return (
    <Layout>
      <Introduction />

      {/* <PostList /> */}
    </Layout>
  );
}
