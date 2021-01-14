import React from "react"
import './SecondIndexSection.css'
import Veg from '../../images/fullveg.jpg'
import { Link } from "gatsby"


function SecondIndexSection(){

    return(

        <div className='SecondSectionContainer'>
            <div className='VegDiv'>
                <img src={Veg}
                className='VegImage'></img>
            </div>

            <div className='TextDiv2'>
                <l className='FirstTitle2'>We make it easy for you to cook delicious dinners</l>
                <l className='SecondTitle2'>Simply choose you recipes from a weekly
                                            menu and we'll deliver freshly picked
                                            vegetables, pre-portioned ingredients 
                                            and step by step recipies direct to 
                                            your door ready for you to cook</l>
              
            
                <Link to="/page-2/">
                     <button type="button"
                     className='ShopNowButton'>
                    Shop Now
                     </button>
                </Link>
            </div>
        </div>

    )
}

export default SecondIndexSection;