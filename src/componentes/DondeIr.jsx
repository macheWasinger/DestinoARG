import React from 'react';

const DondeIr = () => {

    return (
        <div className="container-dondeIr">
            <div className="container_title-subtitulo">
                <h1 className="title-dondeIr">¿Dónde ir?</h1>

                <p className="subtitulo-dondeIr">Estas son algunas de nuestras 23 provincias.</p>
            </div>
            <a name="DondeIr"></a>

            <div className="container-provincias_DondeIr">
                <div className="container_data-prov" data-aos="fade" data-aos-delay="200">
                    <img className="img-escudo" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Coat_of_arms_of_Argentina.svg" alt="" />
                    <h2 className="title_provincia">Provincia de Buenos Aires</h2>
                    <p className="data-provincia">Es una de las más ricas de la Argentina, encierra paisajes muy diferentes entre sí, como el campo, las sierras, las grandes urbes, las lagunas, el delta del Paraná y, por supuesto, todo el abanico de playas que se extiende por la costa atlántica. Es ideal para el turismo.</p>
                </div>

                <div className="container_data-prov" data-aos="fade" data-aos-delay="350">
                    <img className="img-escudo" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Escudo_C%C3%B3rdoba-Argentina-color.svg" alt="" />
                    <h2 className="title_provincia">Provincia de Córdoba</h2>
                    <p className="data-provincia">Además de su histórica y hermosa ciudad, ofrece al visitante innumerables atractivos, enmarcados por los distintos sistemas serranos del oeste y noroeste provincial. Sus ríos y arroyos, sus interminables áreas verdes y boscosas, las bondades del clima y los paisajes naturales únicos, atraen visitantes todo el año.</p>
                </div>

                <div className="container_data-prov" data-aos="fade" data-aos-delay="500">
                    <img className="img-escudo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Escudo_de_Chubut.svg/1200px-Escudo_de_Chubut.svg.png" alt="" />
                    <h2 className="title_provincia">Provincia de Chubut</h2>
                    <p className="data-provincia">Encierra dos paisajes opuestos muy buscados por el turista que proviene de las grandes ciudades: la montaña y el mar. Y una interminable variedad de atractivos turísticos. Las ciudades importantes sobre la costa del océano, como Rawson, Puerto Madryn y Puerto Pirámides, en la Península Valdés.</p>
                </div>

                <div className="container_data-prov misiones" data-aos="fade" data-aos-delay="650">
                    <img className="img-escudo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Escudo_de_la_Provincia_de_Misiones.svg/1715px-Escudo_de_la_Provincia_de_Misiones.svg.png" alt="" />
                    <h2 className="title_provincia">Provincia de Misiones</h2>
                    <p className="data-provincia">Sigue conquistando todos los años a miles de viajeros que se acercan para disfrutar de sus atractivos turísticos naturales, a los que se sumó en los últimos tiempos una buena cantidad de destinos culturales e históricos. Todo enmarcado por la famosa tierra colorada de la provincia, por sus saltos de agua y por su selva impenetrable.</p>
                </div>

                <div className="container_data-prov mendoza" data-aos="fade" data-aos-delay="800">
                    <img className="img-escudo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Escudo_de_Mendoza.svg/1515px-Escudo_de_Mendoza.svg.png" alt="" />
                    <h2 className="title_provincia">Provincia de Mendoza</h2>
                    <p className="data-provincia">Sus encantos pueden ser disfrutados durante todo el año: sus bellezas naturales y la inmensidad de sus montañas, la fama de sus bodegas y sus excelentes vinos, y la conocida Fiesta de la Vendimia que se celebra cada mes de marzo. Las bodegas más importantes abren las puertas de sus establecimientos a jerarquizados wine-tours.</p>
                </div>
                <div className="container_data-prov tierraDelFuego" data-aos="fade" data-aos-delay="950">
                    <img className="img-escudo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Escudo_de_Mendoza.svg/1515px-Escudo_de_Mendoza.svg.png" alt="" />
                    <h2 className="title_provincia">Provincia de Tierra del Fuego</h2>
                    <p className="data-provincia">Comprende la Isla Grande, la Antártida Argentina y las Islas del Atlántico Sur. La primera, a pesar de estar en el extremo sur del país, es la más visitada, quizá por sus encantos naturales imperdibles. Ushuaia es la capital y un polo turístico de primer nivel, al que se llega por la ruta nacional 3 o por vía aérea.</p>
                </div>
            </div>
        </div>
    )
}

export default DondeIr
