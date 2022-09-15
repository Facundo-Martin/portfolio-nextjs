import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import RenderHomePage from '../components/HomePage/RenderHomePage';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home | Facundo Martin</title>
      </Head>
      <Layout>
        <RenderHomePage />
      </Layout>
    </>
  );
};

export default Home;
