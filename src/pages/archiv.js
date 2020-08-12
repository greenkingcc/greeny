import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { GoPackage } from "react-icons/go";
import { FaPallet, FaTruckPickup } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import Menu from "../components/Home/Menu";
import Title from "../components/Globals/Title";

import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";

const ArchivPage = ({ data }) => (
  <Layout>
    <SEO title="Service" />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Archiv"
      styleClass="service-background"
    /> */}
    <Menu items={data.menu} />

    <section className="contact py-5">
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Stöbern Sie in unserem Archiv, sortieren Sie ganz bequem über die
              Schaltflächen zu Ihren Wunschobjekten
            </p>

            <Link to="/produkte/">
              <button className="btn text-uppercase btn-yellow btn-yellow-white-bg">
                Jetzt stöbern!
              </button>
            </Link>
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
    menu: allContentfulRandomitems {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default ArchivPage;
