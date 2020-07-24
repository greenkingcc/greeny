import React from "react";
import Product from "../components/Home/Product";
import Title from "../components/Globals/Title";
import { Link, StaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";

import Layout from "../components/layout";
import Info from "../components/Home/Info";

const getProducts = graphql`
  {
    products: allContentfulProdukt {
      edges {
        node {
          title
          slug
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <Layout>
            <SEO title="Produkte" />

            <section className="py-5">
              <div className="container">
                <Title title="Unsere Auswahl" />
                <div className="row">
                  {data.products.edges.map(({ node: product }) => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>
              </div>
            </section>

            <Info />
          </Layout>
        );
      }}
    />
  );
}
