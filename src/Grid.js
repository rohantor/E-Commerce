import React from "react";
import Card from "./Card";
import text from "./data.js";
export default function Grid() {

  const [removed ,setRemoved ] =React.useState([])
  return(

    <div className="grid-container">
      {
        text.filter((item)=>{
          return !removed.includes(item.id)

        }).map((item) => {
          return (
            <Card
              Product={{
                title: item.title,
                url: item.url,
                description: item.description,
                deleteStatus: false,
                id:item.id,
                setRemoved:setRemoved
              }}
            />
          )})
      } </div>

      
      
     
    
  );
}
