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
                width: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
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
    console.log(edge, 'edge console log')
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
