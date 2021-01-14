import React from "react"
import './FirstIndexSection.css'
import VegPlate from '../../images/dinnerplateflipped.png'

function FirstIndexSection(){

    return(

        <div className='FirstSectionContainer'>
            <div className='TextDiv'>
                <l className='FirstTitle'>You deserve better</l>
                <l className='SecondTitle'>Consider this a <br></br>taste intervention</l>
                <button className='LearnButton'> LEARN MORE</button>
            </div>

            <div className='PlateDiv'>
                <img src={VegPlate}
                    className='VegPlateImage'></img>

            </div>

        </div>

    )
}

export default FirstIndexSection;