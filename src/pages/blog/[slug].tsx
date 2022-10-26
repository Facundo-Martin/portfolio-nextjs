import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import RenderPost from '../../components/Post/RenderPost';
import { getPosts } from '../../services';

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
  // ...
};
