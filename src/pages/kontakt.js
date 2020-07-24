import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaCouch } from "react-icons/fa";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Title from "../components/Globals/Title";

const KontaktPage = ({ data }) => (
  <Layout>
    <SEO title="Kontakt" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Mit uns Kontakt aufnehmen"
      styleClass="kontakt-background"
    />

    <section className="contact py-5">
      <Title title="Jetzt kontaktieren" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
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
              <label htmlFor="name">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="name@email"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description"></label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="Ihre Anfrage"
              ></textarea>
            </div>
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
