
import React, {useState} from "react"
import './SiteNav.css';

function SiteNav(){

const [dropDown, setDropDown] = useState<boolean>(false);



function handleMenuDropDown(): void {
    setDropDown(!dropDown);
  }  

 

return(
    <div className='SiteNavDiv'>

        <label className='NavMenuItem'>Recipe Box</label>
        
            <div>
                <label className='NavMenuItem'
                    onClick={handleMenuDropDown}
                    >
                        Products</label>
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