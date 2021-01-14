import React from "react"
import './NavBar.css'
import SiteNav from './SiteNav/SiteNav.tsx'
import AccountBar from './AccountBar/AccountBar'

import CompanyLogo from '../../images/logo.svg'


function NavBar(){

return (

    <div className='NavBarDiv'>
            <img src={CompanyLogo} className='NavBarImg' ></img>
            <SiteNav></SiteNav>
            <AccountBar></AccountBar>

    </div>
)

}

export default NavBar