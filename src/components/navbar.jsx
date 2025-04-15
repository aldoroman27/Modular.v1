/*En esta parte estamos importando de la librería react-roter Link para los links de nuestras distintas páginas*/
import { Link } from "react-router-dom";
/*En este apartado estmoas importando los íconos de cada una de nuestras páginas*/
import { House } from 'phosphor-react';
import { Student } from 'phosphor-react';
import {UserCirclePlus} from 'phosphor-react';
import { BookOpen } from 'phosphor-react';
import { Info } from 'phosphor-react';
import { BookBookmark } from 'phosphor-react';
/*Importamos el diseño de nuestra barra de navegación*/
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
        <div className="Logo">
            <h1>[A R R A Y]</h1>
        </div>
        <div className="links">
            <Link to="/">
                <House size={32} />
            </Link>
            <Link to="/Cuenta">
                <Student size={32} />
            </Link>
            <Link to="/Cursos">
                <BookOpen size={32}/>
            </Link>
            <Link to="/Certificados">
                <BookBookmark size={32}/>
            </Link>
            <Link to="/login"> 
                <UserCirclePlus size={32} />
            </Link>
            <Link to="/Informacion">
                <Info size={32}/>
            </Link>
        </div>
    </div>
  );
}