import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaCouch } from "react-icons/fa";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Gattinator</h1>
    <p>
      Willkommen auf Ihrer <Link to="/">Gattinator</Link> Webseite. <FaCouch />
    </p>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Gattinator Webseite"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
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

export default IndexPage;
