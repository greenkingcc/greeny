import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Title from "../components/Globals/Title";

const KontaktPage = ({ data }) => (
  <Layout>
    <SEO title="Kontakt" />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Mit uns Kontakt aufnehmen"
      styleClass="kontakt-background"
    /> */}

    <section className="contact py-5">
      {/* <Title title=" " /> */}
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
              <label htmlFor="description">Beschreibung</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="Ihre Anfrage"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="name">Telefon:</label>
              <input
                type="text"
                className="form-control"
                name="telefon"
                id="telefon"
                placeholder="Ihre Telefonnummer"
              />
            </div>
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              Abschicken
            </button>
          </form>
        </div>
      </div>
    </section>

    {/* <Info /> */}
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "kontakt-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default KontaktPage;
