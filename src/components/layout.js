/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {createGlobalStyle, ThemeProvider} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
  }

  a{
    text-decoration: none;
    color: black;
  }
`

const theme = {
  mode: "light"
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div>
        <div>---Header---</div>
        <div>{children}</div>
        <div>---Footer---</div>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
