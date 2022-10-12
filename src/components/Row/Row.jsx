import React from "react";
import "./Row.scss";
import huitre from "../assets/img/huitrecreusebaie.jpg";

function Row({ price1, price2, price3 }) {
  const images = [
    {
      id: 1,
      img:
        "https://images.pexels.com/photos/10039860/pexels-photo-10039860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        
    },
    {
      id: 2,
      img:
        "https://www.ptitchef.com/imgupl/recipe/comment-faire-cuire-des-huitres--79450p110898.jpg",
    },
    {
      id: 3,
      img:
        "https://images.pexels.com/photos/10039860/pexels-photo-10039860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      img:
        "https://images.pexels.com/photos/10039860/pexels-photo-10039860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="oyesters">
{images.map((img)=>{
  return(
    
      <div className="wrapper">
        <div className="wrapper-list">
          <img src={img.img}></img>
         <p>huitres à commander</p> 
          </div>
          
        </div>
        
     
  )
})}

         </div>
      
    
   
  );
}

export default Row;
