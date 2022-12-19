import { Button } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/common/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div>Hello</div>
      <Button>눌러</Button>
    </Layout>
  );
}
