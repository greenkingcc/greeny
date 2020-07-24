// src/templates/Bag.js
import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";

// run template query
export const query = graphql`
  query productTemplateQuery($slug: String!) {
    item: contentfulProdukt(slug: { eq: $slug }) {
      id
      slug
      title
      description {
        json
      }

      image {
        fluid {
          src
        }
      }
      detailimages {
        fluid {
          src
        }
      }
      price
    }
  }
`;

const StyledImage = styled(Img)`
  width: 30rem;
  height: 30rem;
`;

const BagTemplate = ({ data: { item } }) => {
  const options = {
    // options for rich text formating
  };

  return (
    <Layout>
      <br />
      <h2 class="product-title">{item.title}</h2>
      {/* <div>{item.shortDescription}</div> */}
      <StyledImage
        fluid={item.image.fluid}
        imgStyle={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
      {/* render the rich text format description */}
      <main>{documentToReactComponents(item.description.json, options)}</main>
    </Layout>
  );
};

export default BagTemplate;
