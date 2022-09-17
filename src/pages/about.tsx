import type { NextPage } from 'next';
import Head from 'next/head';
import RenderAbout from '../components/About/RenderAbout';
import Layout from '../components/Layout/Layout';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home | Facundo Martin</title>
      </Head>
      <Layout>
        <RenderAbout />
      </Layout>
    </>
  );
};

export default About;
