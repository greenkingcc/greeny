// src/templates/Bag.js
import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Contact from "../components/Home/Contact";
import Title from "../components/Globals/Title";

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
            <h6 className="price">{item.price}€</h6>
            <a
              href={
                `mailto:info@gattinator.de?subject=Interesse%20an:` +
                item.title +
                `&body=Hallo%20Gattinator,%0D%0DIch%20interessiere%20mich%20fuer:%0Dhttps://gattinator-shop.netlify.app/produkte/` +
                item.slug +
                `%0Dzu%20einem%20Preis%20von%20` +
                item.price +
                `%20Euro`
              }
            >
              <button className="btn btn-yellow btn-yellow-white-bg mt-3 text-capitalize ">
                Kaufen
              </button>
            </a>{" "}
            <h6 className="text-muted mt-3">(per Mail kaufen)</h6>
          </div>
        </main>
      </div>{" "}
      <section className="contact py-5">
        <Title title="Ihre Kaufanfrage" />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form
              action="https://formspree.io/john.lester.kortmann@gmail.com"
              method="POST"
            >
              {/* name */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Max Mustermann"
                />
              </div>
              {/* email */}
              <div className="form-group">
                <label htmlFor="name">E-Mail</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="name@E-Mail"
                />
              </div>
              {/* description */}
              <div className="form-group">
                <label htmlFor="description">
                  Beschreiben Sie Ihre Kaufanfrage:
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  rows="5"
                  placeholder={
                    `Ich würde gerne ` +
                    item.title +
                    ` zu einem Preis von ` +
                    item.price +
                    ` € kaufen. `
                  }
                ></textarea>
              </div>{" "}
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5"
              >
                Abschicken
              </button>{" "}
              <h6 className="text-muted mt-3">
                (per Online-Kontaktformular kaufen)
              </h6>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BagTemplate;
