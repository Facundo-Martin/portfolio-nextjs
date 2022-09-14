import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

const Articles: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home | Facundo Martin</title>
      </Head>
      <Layout>
        <div className="text-6xl text-pink-200 font-semibold">Articles page</div>
      </Layout>
    </>
  );
};

export default Articles;
