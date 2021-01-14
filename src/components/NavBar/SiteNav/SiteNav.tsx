
import React, {useState} from "react"
import './SiteNav.css';
import UpArrow from '../../../images/up.png';
import DownArrow from '../../../images/down.png';

function SiteNav(){

const [dropDown, setDropDown] = useState<boolean>(false);



function handleMenuDropDown(): void {
    setDropDown(!dropDown);
  }  

 

return(
    <div className='SiteNavDiv'>

        <label className='NavMenuItem'>Recipe Box</label>
        
            <div>
                <div className='ProductDiv'>
                        <label className='NavMenuItem'
                            onClick={handleMenuDropDown} >
                            Products</label>
                            
                            {dropDown? (
                        <img  className='ArrowImg' src={UpArrow} alt={UpArrow}/>
                        ):(
                        <img  className='ArrowImg' src={DownArrow} alt={UpArrow}/>)}                        
                </div>

            
                    {dropDown && (
                        <div className='dropDownMenu'>
                            <label>Fruit</label>
                            <label>Vegetables</label>
                            <label>Eggs</label>
                            <label>Milk</label>
                            <label>Meat</label>
                            <label>Fresh Drinks</label>
                        </div>
                        )}
                        
            </div>       
        
        <label className='NavMenuItem'>About Us</label>
        <label className='NavMenuItem'>Visit Us</label>


    </div>

)

}

export default SiteNav;