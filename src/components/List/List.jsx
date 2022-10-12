import React, { useState } from "react";
import "../List/List.scss";
import huitre from "../assets/img/photo3.jpg";
import Row from "../Row/Row";

function List() {
  const [price1, setPrince1] = useState(15);
  const [price2, setPrice2] = useState(31);
  const [price3, setPrice3] = useState(45);
  return (
    <div className="Select">
      <h1>Selection Huitres</h1>
      <div class="container">
        <div>
          <Row price1={price1} />
        </div>
        <div>
          <Row price2={price2} />
        </div>
        <div>
          <Row price3={price3} />
        </div>

       
      </div>
    </div>
  );
}

export default List;
