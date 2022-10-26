import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import RenderPost from '../../components/Post/RenderPost';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title> Contact | Facundo Martin</title>
      </Head>
      <Layout>
        <RenderPost />
      </Layout>
    </>
  );
};

export default Contact;
