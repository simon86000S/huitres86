import React from "react";
import "../Aside/Aside.scss";
import plat from "../assets/img/photo7.jpeg";
import huitre from "../assets/img/huitrecreusebaie.jpg";

function Aside() {
  return (
    <div className="container-Aside">
      <h1><img src={plat}></img>Notre sélection<img src={huitre}></img></h1>
    <div className="Aside">
      
      <div className="container1">
        <div className="background1">
          <h1>Qualité</h1>
          <img src={plat}></img>
        </div>
      </div>
      <div className="container2">
        <div className="background">
          <h1>sélection</h1>
          <img src={huitre}></img>
          
      </div>
    
    </div>
   
    </div>
    </div>
  );
}

export default Aside;
