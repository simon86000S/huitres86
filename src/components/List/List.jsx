import React from "react";
import "../List/List.scss";
import huitre from "../assets/img/photo3.jpg";
import huitresvg from '../assets/img/huitresvg.jpg'
import Row from "../Row/Row";
import Footer from '../Footer/Footer'

function List() {

  return (
    <div className="Select">
      <h1><img src={huitresvg}></img>La Sélection</h1>
      <div class="container">
        <div>
          <Row  />
        </div>
     
       
      
      </div>
      
    </div>
  );
}

export default List;
