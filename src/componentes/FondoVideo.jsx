import React from 'react'
import bootstrap from  'bootstrap/dist/js/bootstrap.min.js'
import arrow from '../img/arrow.svg';
import ArgentinaDiversidad from '../video/ArgentinaDiversidad.mp4';

const FondoVideo = () => {
    return (
      <div className="container-padre">
        <video className="style_background-video" 
        onloadedmetadata="this.muted=true" autoPlay loop muted>
          <source src={ArgentinaDiversidad} />
        </video>

        <div className="rectanguloBlanco">
          <h1 className="text-rectangulo">Sueña, planea tu viaje, y disfruta.</h1>
        </div>
      </div>
    );
  }

export default FondoVideo
