import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <h2 className="set-left">{frontmatter.title}</h2>
      {frontmatter.date && <p>{frontmatter.date}</p>}
      <div
        className={`blog-post-content text
          ${frontmatter.title === "Reading List, 2017-2020" ? "reading-list" : ""}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        date
      }
    }
  }
`