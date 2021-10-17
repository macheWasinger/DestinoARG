import React from 'react';
import geoArg from '../img/geografiaArgentina.png';

const Contactos = () => {
    return (
        <div className="container-general">
            <div className="container-contact">
                <a name="Contactos"></a>
                <div className="container_title-form">
                    <h1 className="title-formulario">Contactos</h1>
                    <p className="parrafo-contact">¿Deseas hacernos una consulta? Contáctanos, responderemos tu mensaje lo más breve posible.</p>
                    
                    <img className="style-geoArg" src={geoArg} alt="" />
                </div>
                <div className="container-form">
                    <input type="text" name="Nombre" placeholder="Nombre" className="input-form" />
                    <input type="email" name="Email" placeholder="Email" className="input-form" />
                    <input type="text" name="Telefono" placeholder="Teléfono (opcional)" className="input-form" />
                    <textarea name="Consulta" placeholder="Consulta" className="input-form_consulta" ></textarea>
                    <input type="button" value="Enviar" id="boton" className="input-form_botonEnviar" />
                </div>
            </div>
            <div className="container_redes-sociales">
                    <a href="https://www.facebook.com/" className="red-social" target="_blank">
                        <i className="fab fa-facebook-f logo"></i>
                    </a>
                    <a href="https://twitter.com/?lang=es" className="red-social" target="_blank">
                        <i className="fab fa-twitter logo"></i>
                    </a>
                    <a href="https://www.instagram.com/?hl=es" className="red-social" target="_blank">
                        <i className="fab fa-instagram logo"></i>
                    </a>
                    <a href="https://www.youtube.com/" className="red-social" target="_blank">
                        <i className="fab fa-youtube logo"></i>
                    </a>
                </div>
                <a href="#/">
                    <div className="container_arrow-up">
                        <i className="fas fa-angle-up"></i>
                    </div>
                </a>
                <h3 className="datos-developer">hecho por Marcelo Adrián Wasinger 2021</h3>
        </div>
    )
}

export default Contactos