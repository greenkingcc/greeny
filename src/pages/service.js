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

const KontaktPage = ({ data }) => (
  <Layout>
    <SEO title="Service" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Service & Kaufabwicklung"
      styleClass="service-background"
    />

    <section className="contact py-5">
      <Title title="Transport&Versandmöglichkeiten" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Sollten Sie auf unserer Seite ein Objekt der Begierde gefunden
              haben, freuen wir uns über eine Nachricht Ihrerseits.
            </p>
            <p className="lead text-muted mb-5">
              Die Bezahlung erfolgt vorab. Die angegebenen Preise sind ohne
              Versandkosten. Da diese je nach Objekt und Zustellort
              unterschiedlich sind, bitten wir um eine kurze Nachricht mit
              Zustelladresse Ihrerseits. Nutzen sie dazu gerne einfach unser
              Kontaktformular.
            </p>
            <ul className="services-icons">
              <li>
                <GoPackage className="mail-icon" /> In der Regel versenden wir
                mit DHL...
              </li>
              <li>
                <FaPallet className="mail-icon" /> Größere Objekte werden
                mittels Spedition auf Palette geliefert
              </li>
              <li>
                <FiTruck className="mail-icon " /> Außerdem ist der Versand per
                Möbelkurier möglich
              </li>
              <li>
                <FaTruckPickup className="mail-icon" /> Selbstabholung
              </li>
            </ul>
            <Link to="/produkte/">
              <button className="btn btn-yellow btn-block text-capitalize mt-5">
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
  }
`;

export default KontaktPage;
