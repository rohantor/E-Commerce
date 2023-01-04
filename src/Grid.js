import React from 'react'
import Card from './Card'
import  text  from './data.js'; 
export default function Grid() {
  return (
    <div className='grid-container'>
        
        {text.map((item)=>{

return(
<Card Product={{
    "title":item.title,
    "url":item.url,
    "description":item.description,
    "deleteStatus":true
}}/>
  
)


})}


    </div>
  )
}
