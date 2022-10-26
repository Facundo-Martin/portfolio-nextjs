import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import RenderPost from '../../components/Post/RenderPost';
import { Post } from '../../d';
import { getPost } from '../../services';

type PostProps = {
  post: Post;
};
const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title> Contact | Facundo Martin</title>
      </Head>
      <Layout>
        <RenderPost post={post} />
      </Layout>
    </>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);

  return {
    props: { post },
  };
  // ...
};
