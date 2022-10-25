import { request, gql } from 'graphql-request';

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
};
