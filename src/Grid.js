import React from 'react'
import Card from './Card'
import  text  from './data.js'; 
export default function Grid() {
  return (
    <div className='grid-container'>
        
        {text.map((item)=>{

return(
<Card/>
  
)


})}


    </div>
  )
}
