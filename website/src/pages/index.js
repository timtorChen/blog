import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>welcome index</div>
    <Link to="/thoughts">thoughts</Link>
  </Layout>
)

export default IndexPage
