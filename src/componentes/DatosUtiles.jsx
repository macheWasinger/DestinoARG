import React from 'react';

const DatosUtiles = () => {
    return (
        <div className="container-datosUtiles">
            <a name="DatosUtiles"></a>
            <h1 className="title-datosUitles">Datos Útiles</h1>
            <p className="subtitulo-datosUtiles">Todo lo que necesitas saber para una magnífica estadía.</p>
            <div className="container_general-portada-title-hand">
                <div className="container_title-hand">
                    <h1 className="title-imagenPortada" data-aos="fade-right" data-aos-offset="200" data-aos-delay="200">Información relevante</h1>
                    <div className="container-hand" data-aos="fade" data-aos-offset="200" data-aos-delay="400">
                        <i className="fas fa-hand-point-down"></i>
                    </div>
                </div>
            </div>
            <div className="container-bloques">
                <div className="bloque1 bloque-movimiento">
                    <div className="container_icon-title" data-aos="zoom-in-right">
                        <i className="fas fa-map-marked-alt"></i>
                        <h1 className="title-bloque">cómo moverte</h1>
                    </div>
                    <div className="container_parrafo-boton">
                        <p className="parrafo-bloque">Múltiples vías de acceso y servicios de transporte para llegar y desplazarse en nuestra ciudad.</p>
                        <button className="boton-verMas boton_color-celeste">
                            <span>ver más</span>
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div className="bloque2 bloque-movimiento">
                    <div className="container_icon-title" data-aos="zoom-in-up">
                        <i className="fas fa-bed"></i>
                        <h1 className="title-bloque">dónde dormir</h1>
                    </div>
                    <div className="container_parrafo-boton">
                        <p className="parrafo-bloque">Toda la oferta de alojamiento que la ciudad tiene para brindar en sus diferentes categorías.</p>
                        <button className="boton-verMas boton_color-naranja">
                            <span>ver más</span>
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div className="bloque3 bloque-movimiento">
                    <div className="container_icon-title" data-aos="zoom-in-left">
                        <i className="fas fa-utensils"></i>
                        <h1 className="title-bloque">dónde comer</h1>
                    </div>
                    <div className="container_parrafo-boton">
                        <p className="parrafo-bloque">Las mejores propuestas culinarias de la ciudad distribuidas en sus diferentes áreas gastronómicas.</p>
                        <button className="boton-verMas boton_color-celeste">
                            <span>ver más</span>
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatosUtiles
