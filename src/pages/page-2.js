import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import animation from '../images/animation.gif'


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
      <img src={animation}
      style={{height: 500}}></img>
    <Link to="/">Go back</Link>
  </Layout>
)

export default SecondPage
