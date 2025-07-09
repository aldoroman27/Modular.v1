import { Link } from "react-router-dom"; // Importamos Link de reat-router
import { House, Student, UserCirclePlus, BookOpen, Info, BookBookmark } from 'phosphor-react';//Importamos los íconos que necesitamos
import "./navbar.css";//Importamos el diseño de nuestra página

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="Logo">
        <Link to="/" className="logo-text">[A R R A Y]</Link>
      </div>
      <div className="links">
        <Link to="/"><House size={28} /></Link>
        <Link to="/Cuenta"><Student size={28} /></Link>
        <Link to="/Cursos"><BookOpen size={28} /></Link>
        <Link to="/Certificados"><BookBookmark size={28} /></Link>
        <Link to="/login" className="login-link"><UserCirclePlus size={28} /></Link>
        <Link to="/Informacion"><Info size={28} /></Link>
      </div>
    </div>
  );
};
