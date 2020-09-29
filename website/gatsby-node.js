const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions


  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    /* use gatsby-source-filesystem helper function "createFilePath"
      insert a node "slug" and query with 
      ```
        edges{ 
          node { 
            fileds { 
              slug 
            } 
          }
        }
      ```
      "slug" is a conventional word means the easy read form of a specific page on the website
      you can think it as a filename with relative path
    */
    createNodeField({
      name: "slug",
      node,
      value: `/mdxs${value}`
    })
  }
}