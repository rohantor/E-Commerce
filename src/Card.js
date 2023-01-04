import React from 'react'

export default function Card(props) {
    const {title,url,description,deleteStatus} = props.Product
  return (
    <div className='card_outer'>
        <div >
             <h3 className='title' style={{display:"inline-block"}}>
            {title}
            
        </h3>
        <button  style={{display:"inline-block"}}>*</button>
        </div>
       
        <img src={url}
        className='Card_img'/>
        {
            deleteStatus?( <button >
            Delete
        </button>)
            :<></>
        }
       
        <p>
           {description}
        </p>
    </div>
  )
}
