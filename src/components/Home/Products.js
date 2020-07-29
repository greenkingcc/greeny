import React from "react";
import Product from "./Product";
import Title from "../Globals/Title";
import { StaticQuery, graphql } from "gatsby";

const getProducts = graphql`
  {
    products: allContentfulProdukt {
      edges {
        node {
          title
          slug
          price
          image {
            file {
              url
            }
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
        next {
          image {
            fluid {
              src
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
          <section className="py-5">
            <div className="container">
              <Title title="Showroom" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
