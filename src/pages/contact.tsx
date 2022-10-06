import type { NextPage } from 'next';
import Head from 'next/head';
import RenderContact from '../components/Contact/RenderContact';
import Layout from '../components/Layout/Layout';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title> Contact | Facundo Martin</title>
      </Head>
      <Layout>
        <RenderContact />
      </Layout>
    </>
  );
};

export default Contact;
