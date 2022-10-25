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
              createdAt
            }
            slug
            exerpt
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
};
