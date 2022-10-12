import React from "react";
import Nav  from '../Nav/Nav'
import './Huitres.scss';
import huitre from '../assets/img/huitrecreusebaie.jpg'
function Huitres() {
  return (
    <div>
      <Nav></Nav>
      <div className="desc">
        
        <img src={huitre}></img>
        <div className="desc-oyester">
        <h1>Nos Huitres</h1>
        <div className="desc-article">
          <p>
            <h3>Description physique</h3> L’huître est un mollusque sans tête, composé
            d’une coquille et d’un corps mou, et qui possède une bouche, un
            foie, un cœur, une gonade et deux reins. Le corps maintient la
            coquille hermétiquement fermée, la protégeant ainsi contre les
            prédateurs. La couleur de la coquille, composée de deux parties
            distinctes et symétriques, varie selon l’espèce d’huître. Il en
            existe en effet plusieurs variétés : huître française, américaine,
            portugaise… Une huître de 15 ans peut mesurer jusqu’à 15 cm de
            diamètre. Son lieu de vie Une huître vit accrochée aux rochers, dans
            l’eau salée (salinité moyenne) de toutes les mers, notamment au
            niveau des estuaires et des zones de marée.
         
          <h3>Sa reproduction</h3> L’huître se reproduit une ou plusieurs fois en été,
          dans une eau pas trop salée, à une température de 21°C environ. Sa
          reproduction varie selon la variété de l’huître. Ainsi, l’huître plate
          et arrondie conserve ses œufs à l’intérieur de la coquille où se fait
          la fécondation (elle produit de 500 000 à 1 500 000 œufs), tandis que
          l’huître creuse et allongée produit des œufs qu’elle expulse dans le
          milieu marin et qui, après fécondation, se transforment en larves de
          1/10ème à 2/10ème de millimètre avant de devenir des naissains
          (petites huîtres). Il y a lieu de noter que les huîtres sont
          hermaphrodites, c’est-à-dire qu’elles peuvent changer de sexe d’une
          saison de reproduction à l’autre. On estime que ce changement dépend
          de facteurs externes (alimentation, température, salinité...) et de
          leurs hormones. </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Huitres;
