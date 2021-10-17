import React from 'react'
import { useState } from "react";

const Menu = () => {
     const [isActive, setActive] = useState(false);
     const toggleMenu = () => {
         setActive(!isActive);
     };

    return (
        <div className="container-Padre_menu">
            <div className="burger">
                <input type="checkbox" id="btn-menu" checked={isActive} onClick={toggleMenu} />
                <label for="btn-menu" className="label-menu">
                    <span id="span-1"></span>
                    <span id="span-2"></span>
                    <span id="span-3"></span>
                </label>
            </div>

            <nav className={`menu-navegacion ${isActive ? "menu-activado" : "hide"}`}>
                <ul>
                    <li className="item-li-home" onClick={toggleMenu}>
                        <a href="#/">
                            <i class="fas fa-home"></i>
                        </a>
                        </li>
                    <li className="item-li item-1" onClick={toggleMenu}>
                        <a href="#QueHacer">¿Qué hacer?</a>
                    </li>
                    <li className="item-li item-2" onClick={toggleMenu}>
                            <a href="#DondeIr">¿Dónde ir?</a>
                    </li>
                    <li className="item-li item-3" onClick={toggleMenu}>
                        <a href="#DatosUtiles">Datos útiles</a>
                        </li>
                    <li className="item-li item-4" onClick={toggleMenu}>
                            <a href="#Contactos">Contactos</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
