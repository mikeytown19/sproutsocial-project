import { StaticQuery, graphql } from 'gatsby';

export const Image = ({ src }) => (
  <StaticQuery
    query={graphql`
        query MyQuery {
          allImageSharp {
            edges {
              node {
                fluid {
                  originalName
                }
                id
                gatsbyImageData
              }
            }
          }
        }
      `}
    render={({ allImageSharp }) => <div>hi</div>}
  />
);
