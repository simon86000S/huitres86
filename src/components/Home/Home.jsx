import React from "react";
import Nav from "../Nav/Nav";
import Article from "../Article/Article";
import Footer from "../Footer/Footer";
import Aside from '../Aside/Aside';
import List from "../List/List";


import "./Home.scss";
function Home() {
  return (
    <div className="Home">
      <Nav></Nav>
      <Article></Article>
<Aside/>
<List/>
     
    </div>
  );
}

export default Home;
