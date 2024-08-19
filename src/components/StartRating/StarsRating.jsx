import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { FaRedhat } from "react-icons/fa6";

import './startRating.css'
import { useState } from "react";
const StarsRating = ({stars = 5}) => {

  const [rating, setRating] = useState(0)

  const handleClick = (idx) => {
    rating == 0 && setRating(idx)
  }

  return (
    <div className="starts-container">

        <div className="pop-stars">
            <FaRedhat className="icon-hat"/>
            <h2>Please rate our service</h2>

            <div className="stars-container">

               {
                [...Array(stars)].map( (element , idx) => (
                  
                  idx  + 1<= rating 
                  ? <RiStarSFill 
                    style={ {cursor: 'pointer'} } 
                    onClick={ () => handleClick(idx + 1) } 
                    key={idx}/> 

                  : <RiStarSLine 
                  style={ {cursor: 'pointer'} } 
                  onClick={ () => handleClick(idx + 1) } 
                  key={idx}/>

                ) )
               } 

            </div>

            {
              rating > 0 && <p>Thanks for your contribution!</p>
            }

            

        </div>
    </div>
  )
}

export default StarsRating