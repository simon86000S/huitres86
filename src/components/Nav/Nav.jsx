import React from "react";
import "./Nav.scss";
import HomeIcon from "@mui/icons-material/Home";
import {Link } from 'react-router-dom';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';function Nav() {
  return (
    <div className="Nav">
      <div className="menuBurger">
<span></span>
<span></span>
<span></span>
      </div>
      <div className="contact">
        <p>
          <span className="i-style">Appelez-nous au</span> 09 56 14 57 58
        </p>
        
      </div>
      <div className="list-nav">
        <ul>
           <WorkSharpIcon style={{marginRight:'150px',cursor:"pointer",width:"150px",height:"30px"}} />
          <Link style={{textDecoration:"none",display:"flex",alignItems:'center'}} to='/'><HomeIcon style={{ color: "white" }}></HomeIcon> <li>Accueil</li></Link>
          <Link style={{textDecoration:"none"}} to='/huitre'><li>Nos Huitres</li></Link>
          <li>Le Producteur</li>
          <Link style={{textDecoration:"none"}} to='/delivery'><li>Livraison </li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
