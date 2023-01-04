import React from 'react'
import Button from '@mui/material/Button';
import Modal from './Modal'
export default function Card(props) {
    const {title,url,description,id} = props.Product;
    const [deleteStatus , setDeletestatus]= React.useState(props.Product.deleteStatus)
    
  return (<>
  

  
    <div className='card_outer'>
        
        <div >
             <h3 className='title' style={{display:"inline-block"}}>
            
             {id}
            <br />{title}
           
        </h3>
        <button  style={{display:"inline-block"}}
         onClick={()=>{

            setDeletestatus(!deleteStatus)
            console.log("Delete")

        }}>*</button>
        </div>
        <Modal Product ={props.Product}/>
        <img src={url}
        className='Card_img'/>
        {
            deleteStatus?( <Button variant="outlined" color="error" onClick={()=>{
                    props.Product.setRemoved(old=>[...old,id])
                    console.log("Deleted")
            }
            }
             >
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
    </>
  )
}
