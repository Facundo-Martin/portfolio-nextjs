import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import RenderProjects from '../components/Projects/RenderProjects';

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home | Facundo Martin</title>
      </Head>
      <Layout>
        <RenderProjects />
      </Layout>
    </>
  );
};

export default Projects;
