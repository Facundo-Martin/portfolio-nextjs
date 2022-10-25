import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title> About | Facundo Martin</title>
      </Head>
      <Layout>
        <h1>Blog</h1>
      </Layout>
    </>
  );
};

export default Blog;
