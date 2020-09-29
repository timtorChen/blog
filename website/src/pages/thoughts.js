import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Card = styled.div`
  text-decoration: none;
`

const IndexPage = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMMM DD,YYYY")
                meta
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Thoughts" />
      <Link to="/">home</Link>
      {allMdx.edges.map(({ node }, index) => {
        const { title, date, meta } = node.frontmatter
        const { slug } = node.fields

        return (
          <Card>
            <Link to={slug} key={index}>
              <div>{title}</div>
              <div>{date}</div>
              <div>{meta}</div>
            </Link>
          </Card>
        )
      })}
    </Layout>
  )
}

export default IndexPage
