import React from "react";
import './RecipeCard.css';

function RecipeCard(props){


    return(

        <div className='RecipeCard'>
                <img src={props.picture}
                     className='RecipeCardImage'/>
                
                <div className='DescDiv'>
                    <label className='Description'>{props.description}</label>
                    <label className='Price'>{props.price}</label>

                </div>
        </div>
    )
}

export default RecipeCard;