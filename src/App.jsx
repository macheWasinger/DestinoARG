import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*//////// IMPORTO COMPONENTES ////////*/
import Header from './componentes/Header';
import FondoVideo from './componentes/FondoVideo';
import QueHacer from './componentes/QueHacer';
import DondeIr from './componentes/DondeIr';
import DatosUtiles from './componentes/DatosUtiles';
import Contactos from './componentes/Contactos';

/********* IMPORTO ESTILOS CSS *********/
import './App.css';
import './css/Header.css';
import './css/Menu.css';
import './css/FondoVideo.css';
import './css/QueHacer.css';
import './css/DondeIr.css';
import './css/DatosUtiles.css';
import './css/Contactos.css';

function App() {
  return (
    <div className="App">
      <a name="/"></a>
        <Header />
        <FondoVideo />
        <QueHacer />
        <DondeIr />
        <DatosUtiles />
        <Contactos />
    </div>
  );
}

export default App;
