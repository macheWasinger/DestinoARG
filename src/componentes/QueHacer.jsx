import React from 'react';
import $ from 'jquery'; 
 

const QueHacer = () => {

    return (
        <div className="bloquePadre_provincias">

            <a name="QueHacer"></a>
            <div className="container_titulo-slogan">
                <h1 className="title-provincias">
                        ¿Qué hacer?</h1>
                <p className="slogan-provincias">Estos son "algunos" de nuestros destinos soñados</p>
            </div>

            <div className="container-provincias">
                <div className="container-images">
                    <div className="container-image">
                        <h2>Buenos Aires</h2>
                        <img src="https://pbs.twimg.com/media/D7Q2CMdW4AIJ5Iu.jpg" alt="" />
                    </div>
                    <div className="container-image">
                        <h2>Córdoba</h2>
                        <img src="https://media.istockphoto.com/photos/san-roque-lake-villa-carlos-paz-crdoba-argentina-picture-id1162724795?k=20&m=1162724795&s=612x612&w=0&h=5gTKDB7sY1qCMS6jSevSN3rZ3gzF4KQKKF0pubK5cks=" alt="" />
                    </div>
                    <div className="container-image">
                        <h2>Chubut</h2>
                        <img src="https://www.redcabanias.com/blog/wp-content/uploads/2012/12/66817.jpg" alt="" />
                    </div>
                    <div className="container-image">
                        <h2>Misiones</h2>
                        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2QPUXE7NBVFDDL3UTLRXUOW5EY.jpg" alt="" />
                    </div>
                </div>
                <span className="container_button-arrow">
                    <a className="button_ver-mas" href="">Ver más</a>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
            </div>

            <div className="parqueNacional">
                <div className="container_title-slogan_nationalPark">
                    <h1 className="title_nationalPark">Parques Nacionales</h1>

                    <p className="slogan_nationalPark">Conectate con nuestra naturaleza.</p>

                    <span className="span-nationalPark">
                        <a className="buttom_ver-mas_nationalPark" href="">Ver más</a>
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div className="patrimonioMundial">
                <div className="container_title-slogan_patrimonioMundial">
                    <h1 className="title_patrimonioMundial">Patrimonios Mundiales</h1>

                    <p className="slogan_patrimonioMundial">Cerros multicolores, parques nacionales, grandes escenarios de hielo, ruinas y estancias jesuíticas y mucho más.
                    </p>

                    <span className="span-patrimonioMundial">
                        <a className="buttom_ver-mas_patrimonioMundial" href="">Ver más</a>
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default QueHacer
