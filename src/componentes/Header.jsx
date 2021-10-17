import React from 'react';
import logotipoDA from '../img/logotipoDA.png';
import Menu from './header/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="fixed-top">
            <header>
                <a href="#/">
                    <div className="container-logo">
                        <div className="container-text-tittle">
                            <h2 className="text-DA">Destino ARG</h2>
                            <h3 className="text-DS">Destino Soñado</h3>
                        </div>
                       
                        <img src={logotipoDA} className="img-logotipoDA" alt="" />
                    </div>
                </a>
                <Menu />
            </header>
        </div>
        
    )
}

export default Header