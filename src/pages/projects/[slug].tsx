import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import RenderProject from '../../components/Project/RenderProject';
import { projects } from '../../utils';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((x) => {
    return {
      params: { slug: x.slug },
    };
  });
  // The code above maps and gets all the slugs which defines each path and stores them in a const named paths (obviously)
  // So we end up with an array of all the paths instead of having to add them manually one by one
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

interface IParams extends NextParsedUrlQuery {
  slug: string;
}
// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const project = projects.find((x) => x.slug === slug);
  return {
    props: { project: project },
  };
};

const Project: NextPage = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title> {project.name} | Facundo Martin</title>
      </Head>
      <Layout>
        <RenderProject project={project} />
      </Layout>
    </>
  );
};

export default Project;
