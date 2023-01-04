import React from 'react'
import Button from '@mui/material/Button';
export default function Card(props) {
    const {title,url,description} = props.Product;
    const [deleteStatus , setDeletestatus]= React.useState(props.Product.deleteStatus)
    
  return (
    <div className='card_outer'>
        <div >
             <h3 className='title' style={{display:"inline-block"}}>
            {title}
            
        </h3>
        <button  style={{display:"inline-block"}}
         onClick={()=>{

            setDeletestatus(!deleteStatus)
            console.log("Delete")

        }}>*</button>
        </div>
       
        <img src={url}
        className='Card_img'/>
        {
            deleteStatus?( <Button variant="outlined" color="error" >
            Delete
        </Button >)
            :<>
            <Button variant="contained">
            WishList
        </Button>
        <Button variant="outlined">
            Add to cart
        </Button></>
        }
       
        <p>
           {description}
        </p>
    </div>
  )
}
