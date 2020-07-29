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
        fluid(maxHeight: 426) {
          src
          ...GatsbyContentfulFluid_tracedSVG
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
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const BagTemplate = ({ data: { item } }) => {
  const options = {
    // options for rich text formating
  };

  return (
    <Layout>
      <h2 class="product-title">{item.title}</h2>
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
        {/* <div>{item.shortDescription}</div> */}

        <StyledImage
          fluid={item.image.fluid}
          imgStyle={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        {/* render the rich text format description */}
        <main>
          <div className="descriptiontxt">
            {documentToReactComponents(item.description.json, options)}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default BagTemplate;
