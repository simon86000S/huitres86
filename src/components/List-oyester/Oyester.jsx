import React, { useState } from "react";
import huitre from "../assets/img/huitrecreusebaie.jpg";
import "./Oyester.scss";
function Oyester() {
  const [img, setImg] = useState([
    {
      price: 30,
      img1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6fG7QYmyTJpkyKUUdFZspD_PzaH0kgxipA&usqp=CAU",
    },
    {
      price: 25,
      img2:
        "https://petitfute.twic.pics/medias/professionnel/1944406/premium/originale/5fc147d77d9af-huitres-le-guen-chaumard-medaillees-d-or.png?twic=v1/cover=780x520",
    },
    {
      price: 40,
      img3:
        "https://www.huitrepaimpol.fr/wp-content/uploads/2018/04/HC50N3.jpg",
    },
    {
      price: 35,
      img4:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/48/07/bd/huitre-creuse-n-3.jpg",
    },
  ]);

  return (
    <div className="oyesters">
      <div className="wrapper">
        {img.map((img) => {
          return (
            <div>
              <div className="wrapper-list">
                <div className="stp">
                  <img src={img.img1}></img>
                  <p>Le prix est de {img.price} euros</p>
                </div>
                <div>
                  <img src={img.img2}></img>
                </div>

                <div>
                  <img src={img.img3}></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Oyester;
