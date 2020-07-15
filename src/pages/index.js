import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCouch } from "react-icons/fa"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Gattinator</h1>
    <p>
      Willkommen auf Ihrer Gattinator Webseite. <FaCouch />
    </p>
  </Layout>
)

export default IndexPage
