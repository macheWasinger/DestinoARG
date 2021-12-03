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

        <div className="rectanguloBlanco" data-aos="fade-right" data-aos-delay="1300">
          <h1 className="text-rectangulo" data-aos="fade-up" data-aos-delay="1900">Sueña, planea tu viaje, y disfruta.</h1>
        </div>
      </div>
    );
  }

export default FondoVideo
