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
import TransitionLink from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Products />

    <h1>Gattinator</h1>
    <p className="main-text">
      Willkommen auf der{" "}
      <AniLink paintDrip to="/produkte">
        Gattinator.de
      </AniLink>{" "}
      Webseite. <FaCouch /> <br />
      <br />
      <AniLink
        cover
        to="/produkte"
        direction="left"
        duration={3}
        bg="
    url(https://images.unsplash.com/photo-1593599933519-26fb7851e242?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80)
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    white            /* color */
  "
      >
        Go home with a random unsplash background
      </AniLink>
      <br />
      Suchen Sie ein ganz bestimmtes Objekt? Dann könnten wir auf auf
      Gattinator.de mit Sicherheit hilfreich für Sie sein. Schreiben Sie uns
      doch unverbindlich eine Nachricht, gerne mit
      Vergleichsbildern/Vergleichsangebot, sofern vorhanden. Wir nehmen Sie bzw.
      Ihr Wunschobjekt auf unsere Liste und würden Sie bei einem Fund
      unsererseits umgehend kontaktieren. Auch für Restaurationen Ihres Objektes
      können Sie uns gerne kontaktieren. Nutzen Sie dazu einfach unser
      Kontaktformular. Je nach Zeit und Aufwand können wir Ihnen auch per
      Ratschlag zur Seite stehen um Ihr Objekt zu restaurieren.
    </p>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Gattinator.de"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
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
