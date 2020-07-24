const path = require("path");
// use gatsby create pages api and query for all product slugs
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      products: allContentfulProdukt {
        nodes {
          slug
        }
      }
    }
  `);

  // create page for each product and list
  // them all in /products/:productSlug
  data.products.nodes.forEach(item => {
    createPage({
      path: `produkte/${item.slug}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: item.slug,
      },
    });
  });
};
