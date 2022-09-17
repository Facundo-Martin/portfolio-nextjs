import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import RenderHomePage from '../components/HomePage/RenderHomePage';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Facundo Martin</title>
        <meta
          name="description"
          content="I’m Facundo Martin, a software developer based in Roseville, California. I develop amazing applications using React - more specifically NextJS - and Tailwind CSS."
        />
      </Head>
      <Layout>
        <RenderHomePage />
      </Layout>
    </>
  );
};

export default Home;
