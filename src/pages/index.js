import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import NavBar from '../components/NavBar/NavBar'
import FirstIndexSection from '../components/FirstIndexSection/FirstIndexSection.js'
import SecondIndexSection from '../components/SecondIndexSection/SecondIndexSection.js'
import FooterBar from '../components/FooterBar/FooterBar.js'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar/>
    <FirstIndexSection/>
    <SecondIndexSection/>
    <FooterBar/>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
   
  </Layout>
)

export default IndexPage
