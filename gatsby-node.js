exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
  {
    allDataJson {
      edges {
        node {
          plants {
            image {
              id
              name
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
            details
            names {
              common
              scientific
            }
            toxicity {
              property
              symptoms
            }
            care {
              light
              water
            }
          }
        }
      }
    }
  }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const projects = result.data.allDataJson.edges[0].node.plants || [];

  projects.forEach((edge) => {
    const path = `/${edge.image.name}`;
    createPage({
      path,
      component: require.resolve('./src/templates/plant.jsx'),
      context: {
        slug: edge.image.name,
        id: edge.image.id,
        plant: edge,

      },
    });
  });
};
