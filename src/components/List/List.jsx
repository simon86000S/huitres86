import React from "react";
import "../List/List.scss";
import huitre from "../assets/img/photo3.jpg";
import Row from "../Row/Row";

function List() {

  return (
    <div className="Select">
      <h1>Selection Huitres</h1>
      <div class="container">
        <div>
          <Row  />
        </div>
        <div>
          <Row  />
        </div>
        <div>
          <Row />
        </div>

       
      </div>
    </div>
  );
}

export default List;
