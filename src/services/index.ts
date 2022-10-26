import { request, gql } from 'graphql-request';

// Move this to env.process in the future
const graphQLAPI = 'https://api-us-west-2.hygraph.com/v2/cl9oqki1t0vyu01umdj09hyih/master';

export const getPosts = async () => {
  const query = gql`
    query Posts {
      postsConnection {
        edges {
          node {
            authors {
              bio
              id
              name
              avatar {
                url
              }
            }
            createdAt
            slug
            excerpt
            title
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphQLAPI, query);
  console.log('HII', result.postsConnection.edges);
  return result.postsConnection.edges;
};

export const getPost = async (slug: string) => {
  console.log('initializing post fetch');
  const query = gql`
  // Why is this rendered as all text instead of variables???
    query Post($slug: String!) {
      post(where: { slug: $slug })
      postsConnection {
        edges {
          node {
            authors {
              bio
              id
              name
              avatar {
                url
              }
            }
            createdAt
            slug
            content {
              raw
            }
            excerpt
            title
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphQLAPI, query, { slug });
  console.log('GETTING SINGLE POST', result.post);
  return result.post;
};
