import "./UserProfile.css";//Importamos los estilos de nuestra página
import axios from "axios"; //Importamos axios para la comunicación con el backend
import { useEffect, useState } from "react"; //Useeffect y usestate para las funciones

// Importamos los íconos de los lenguajes que vamos a utilizar
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiGo,
  SiRust,
  SiTypescript,
} from "react-icons/si";

export const UserProfile = () => {
  const [usuario, setUsuario] = useState(null);
  const [lenguajes, setLenguajes] = useState([]);

  // Mapeo de nombre -> ícono, definimos el nombre y además el color
  const iconosLenguajes = {
    Python: <SiPython color="#3776AB" size={32} />,
    JavaScript: <SiJavascript color="#f7df1e" size={32} />,
    "C++": <SiCplusplus color="#00599C" size={32} />,
    HTML: <SiHtml5 color="#e34c26" size={32} />,
    CSS: <SiCss3 color="#264de4" size={32} />,
    PHP: <SiPhp color="#8892BE" size={32} />,
    Go: <SiGo color="#00ADD8" size={32} />,
    Rust: <SiRust color="#000000" size={32} />,
    TypeScript: <SiTypescript color="#3178C6" size={32} />,
  };

  //Definimos las peticiones para nuestro backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/showuserInfo")//Petición para mostrar los datos del usaurio
      .then((response) => {
        setUsuario(response.data[0]);//Almacenamos la información del usuario
      })
      .catch((error) => {
        console.error("Error al obtener el usuario:", error);//En caso de fallar mostramos el respectivo error por no obtener información
      });

    axios
      .get("http://localhost:5000/lenguajesUsuario")//Hacemos la petición al servidor para obtener los lenguajes del usuario
      .then((response) => {
        const nombres = response.data.map((l) => l.nombreLenguaje);//Hacemos un map dentro de nuestra colección
        setLenguajes(nombres);
      })
      .catch((error) => {
        console.error("Error al obtener los lenguajes:", error);//En caso de fallar mostramos error
      });
  }, []);

  if (!usuario) return <p>Cargando información del usuario...</p>;//En caso que no encuentre información mostramos un mensaje de cargando información

  return (
    <div className="profile-container">
      <h1 className="profile-title">Información del estudiante</h1>
      <div className="profile-content">
        <div className="photo-section">
          <img
            src={`http://localhost:5000/static/imgs/usuarios/${usuario.fotoPerfil || "default.png"}`}//Indicamos el endpoint de donde viene nuestra foto
            alt="Foto del estudiante"
            className="student-photo"
          />
          <p className="username">@{usuario.nombreUsuario}</p>
        </div>
        <div className="info-section">
          <p><strong>Nombre completo:</strong> {usuario.nombreCompleto}</p>
          <p><strong>Fecha de registro:</strong> {usuario.fechaRegistro}</p>
          <p><strong>Nivel general:</strong> {usuario.nivel}</p>

          <p><strong>Lenguajes de programación:</strong></p>
          <div className="lenguajes-icons">
            {lenguajes.map((nombre, i) => (
              <span key={i} title={nombre} style={{ marginRight: "10px" }}>
                {iconosLenguajes[nombre] || "❓"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

