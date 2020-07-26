import React from "react"
import Layout from "src/components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Weirong's Site</title>
    </Helmet>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
