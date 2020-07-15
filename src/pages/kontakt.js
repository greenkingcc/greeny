import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCouch } from "react-icons/fa"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const KontaktPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Gattinator</h1>
    <p>
      Willkommen auf Ihrer Gattinator Webseite. <FaCouch />
    </p>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Mit uns Kontakt aufnehmen"
      styleClass="kontakt-background"
    />
    <Info />
  </Layout>
)

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
`

export default KontaktPage
