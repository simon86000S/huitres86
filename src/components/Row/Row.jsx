import React from "react";
import "./Row.scss";
import huitre from "../assets/img/huitrecreusebaie.jpg";
import { useState } from "react";

function Row() {
  const [price1, setPrince1] = useState(15);
  const [price2, setPrice2] = useState(31);
  const [price3, setPrice3] = useState(45);
  return (
    <div className="oyesters">
      <div className="wrapper">
        <div className="wrapper-list">
          <img src={huitre}></img>
          <h2>Huitres Fines n°2</h2>
         <p>prix: {price1} euros</p> 
        </div>
        <span></span>
        <div className="wrapper-list">
          <img src={huitre}></img>
          <h2>Huitres Fines n°2</h2>
          <p>prix: {price2} euros</p>
        </div>
        <span></span>
        <div className="wrapper-list">
          <img src={huitre}></img>
          <h2>Bourriche de 48</h2>
          <p>prix: {price3} euros</p>
        </div>
       
      </div>
    </div>
  );
}

export default Row;
