import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";
import TransitionLink from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Title from "../components/Globals/Title";
const UeuberunsPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* RANDOM PRODUKTE  */}
    {/* <Products /> */}
    {/* TITLE BAR */}
    <section className="py-5">
      {" "}
      <Title title="" />
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Suchen Sie ein ganz bestimmtes Objekt? Dann könnten unsere
              Kunstobjekte auf
              <AniLink paintDrip to="/produkte" className="main-link">
                {" "}
                Gattinator.de{" "}
              </AniLink>
              mit Sicherheit hilfreich für Sie sein. Schreiben Sie uns doch
              unverbindlich eine Nachricht, gerne mit
              Vergleichsbildern/Vergleichsangebot, sofern vorhanden.
              <br /> Wir nehmen Sie bzw. Ihr Wunschobjekt auf unsere Liste und
              würden Sie bei einem Fund unsererseits umgehend kontaktieren. Auch
              für Restaurationen Ihres Objektes können Sie uns gerne
              kontaktieren. Nutzen Sie dazu einfach unser Kontaktformular. Je
              nach Zeit und Aufwand können wir Ihnen auch per Ratschlag zur
              Seite stehen um Ihr Objekt zu restaurieren.
            </p>
            <Link to="/produkte">
              <button className="btn text-uppercase btn-yellow btn-yellow-white-bg">
                Objekte
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <p className="main-text">
      <br />
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
      ></AniLink>
      <br />
    </p>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Gattinator.de"
      styleClass="default-background"
    />
    {/* <Info /> */}
    {/* <Menu items={data.menu} /> */}
    {/* <Contact /> */}
  </Layout>
);

export const query = graphql`
  {
    img: file(
      relativePath: {
        eq: "armchair-furniture-carpet-home-decor-background-beautiful-composition-decoration.jpg"
      }
    ) {
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

export default UeuberunsPage;
