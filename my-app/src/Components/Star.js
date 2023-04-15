import React, { useState } from 'react'
import './Star.css'

import {BsFillStarFill} from 'react-icons/bs';
export default function Star() {
  
    const [rating,setRating] = useState(null)
   

    return (
    <div>
        {[ ...Array(5)].map((star , i) =>{
            const ratingvalue = i+1;
            return(
                <label>
                    <input type="radio" name="rating" value={ratingvalue}
                    onClick = { ()=>{setRating(ratingvalue)}}
                    />
                    
                    <BsFillStarFill className='star' color={ratingvalue <= rating ? "#ffc107" : "#e4e5e9"} size={20} />
                </label>
            )
        })
        
    }
    {/* {rating} */}

    </div>
  )
}
