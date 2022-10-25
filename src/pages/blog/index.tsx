import type { NextPage } from 'next';
import Head from 'next/head';
import RenderBlog from '../../components/Blog/RenderBlog';
import Layout from '../../components/Layout/Layout';
import { GetStaticProps } from 'next';
import { getPosts } from '../../services';

const posts = [{ title: 'Facundo Martin', excerpt: 'lalala' }];
const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title> About | Facundo Martin</title>
      </Head>
      <Layout>
        <RenderBlog posts={posts} />
      </Layout>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = (await getPosts()) || [];

  return {
    props: posts,
  };
  // ...
};
