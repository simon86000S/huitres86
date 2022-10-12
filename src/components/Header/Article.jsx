import React from "react";
import "./Article.scss";
import huitre from "../assets/img/huitrecreusebaie.jpg";
import huitre2 from "../assets/img/huitre2.jpg";
import huitreeat from "../assets/img/huitreeats.jpeg";
import bourriche from "../assets/img/bourriche.jpg";
import photo3 from "../assets/img/photo5.jpg";
import photo4 from "../assets/img/photo6.jpeg";
import mer from "../assets/img/photo7.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Row from "../Row/Row";
function Article() {
  return (
    <div className="Article">
      <div className="list-price">
        <div className="border">
          <h1>Meilleur vente</h1>
        <Row/>
        </div>

      </div>
      <div className="carrousel">
      <Carousel infiniteLoop autoPlay thumbWidth={150} showStatus='' showThumbs=''>
                <div>
                    <img src={huitre} />
                    <p className="legend">huitre plate classe 2</p>
                </div>
                <div>
                    <img src={huitre2} />
                    <p className="legend">Huitre creuse</p>
                </div>
                <div>
                    <img src={huitreeat} />
                    <p className="legend">Bourriche</p>
                </div>
                <div>
                    <img src={photo3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={photo4} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <div className="desc-article-oyester">
          <h1>Huitres de Bretagne</h1>
          <p>
            Où sont élevées les huîtres ? Elles se déclinent en douze grands
            crus bretons, élevés dans les viviers sur tout le territoire :
            Cancale, Paimpol, Tréguier, Morlaix-Penzé, Rade de Brest, les Abers,
            Aven Belon, Etel, Quiberon, Golfe du Morbihan, Penerf, le Croisic,
            sans oublier les huîtres sauvages de Rhuys. On distingue les huîtres
            creuse, en élevage ou sauvages et les huîtres plates au petit goût
            de noisette.<br></br> Quand les savourer ? Laiteuse ou pas, c’est
            une histoire de goût ! Consommation les mois en « R » ? Voici une
            petite explication de texte : de mai à août, en pleine période de
            reproduction, les huîtres produisent de la laitance qui n’enlève en
            rien le goût et les qualités nutritionnelles de l’huître. Pour
            éviter ce phénomène naturel et permettre une dégustation d’huîtres
            non laiteuses toute l’année, certains ostréiculteurs élèvent des
            huîtres stériles (triploïdes). Conclusion, on mange des huîtres
            toute l’année en Bretagne !
          </p>
          
        </div>
      </div>
     
    </div>
  );
}

export default Article;
