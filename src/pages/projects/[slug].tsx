import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import RenderProject from '../../components/Project/RenderProject';
import { projects } from '../../utils';

const Project: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  let project = projects.find((x) => x.slug === slug);
  return (
    <>
      <Head>
        <title> Home | Facundo Martin</title>
      </Head>
      <Layout>
        <>
          {project && <RenderProject project={project} />}
          {!project && <div>No project</div>}
        </>
      </Layout>
    </>
  );
};

export default Project;
