import React from "react"

import RecipeCard from './RecipeCard/RecipeCard.js'
import'../../Res/Strings'
import recipe1 from '../../images/10.jpg'
import recipe2 from '../../images/11.jpg'
import recipe3 from '../../images/12.jpg'
import { Recipe1, Recipe2, Recipe3 } from "../../Res/Strings"

import './FooterBar.css';

function FooterBar(){

    return(
            <div>
                <div>
                    <l>Latest Recipes</l>

                </div>

                <div className='RecipeRow'>
                    <RecipeCard picture={recipe1} description={Recipe1} price="£8"/>
                    <RecipeCard picture={recipe2} description={Recipe2} price="£15"/>
                    <RecipeCard picture={recipe3} description={Recipe3} price="£8"/>

                </div>


            </div>

    )
}

export default FooterBar;