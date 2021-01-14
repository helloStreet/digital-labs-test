import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import NavBar from '../components/NavBar/NavBar'
import FirstIndexSection from '../components/FirstIndexSection/FirstIndexSection.js'
import SecondIndexSection from '../components/SecondIndexSection/SecondIndexSection.js'
import FooterBar from '../components/FooterBar/FooterBar.js'

import '../Res/Fonts'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar/>
    <FirstIndexSection/>
    <SecondIndexSection/>
    <FooterBar/>
    
   
    
   
  </Layout>
)

export default IndexPage
