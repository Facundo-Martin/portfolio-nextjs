import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import RenderPost from '../../components/Post/RenderPost';
import { Post } from '../../d';
import { getPost, getPosts } from '../../services';

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

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post: Post) => {
    return post.node.slug;
  });
  return {
    paths,
    fallback: false,
  };
  // ...
};
