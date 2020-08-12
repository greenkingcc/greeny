import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { GoPackage } from "react-icons/go";
import { FaPallet, FaTruckPickup } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";

import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Title from "../components/Globals/Title";

const AnkaufPage = ({ data }) => (
  <Layout>
    <SEO title="Service" />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Ankauf Ihrer Objekte"
      styleClass="service-background"
    /> */}

    <section className="contact py-5">
      <Title title="" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Wenden Sie sich doch direkt an uns, und wir werden
              schnellstmöglichst ein Angebot für Sie erstellen.
            </p>
            <p className="lead text-muted mb-5">
              Nutzen sie dazu gerne einfach unser Kontaktformular.
            </p>

            {/* <Link to="/kontakt/">
              <button className="btn text-uppercase btn-yellow btn-yellow-white-bg">
                Kontakt aufnehmen!
              </button>
            </Link> */}
          </div>
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

export default AnkaufPage;
