import React from "react";
import './RecipeCard.css';
import Trolley from '../../../images/supermarket.svg'
function RecipeCard(props){


    return(

        <div className='RecipeCard'>
                <img src={props.picture}
                     className='RecipeCardImage'/>
                
                <div className='DescDiv'>
                     <label className='Description'>{props.description}</label>
                   
                   <div className='PriceDiv'>
                        <label className='Price'>{props.price}</label>
                        <img src={Trolley} alt='default'
                        className='Trolley'/>

                    </div>
                </div>
        </div>
    )
}

export default RecipeCard;