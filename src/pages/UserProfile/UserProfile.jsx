import "./UserProfile.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const UserProfile = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // En fase de pruebas, usamos idUsuario=1 directamente
    axios
      .get("http://localhost:5000/showuserInfo")
      .then((response) => {
        setUsuario(response.data[0]); // Trae un array de un solo objeto
      })
      .catch((error) => {
        console.error("Error al obtener el usuario:", error);
      });
  }, []);

  if (!usuario) {
    return <p>Cargando información del usuario...</p>;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">Información del estudiante</h1>
      <div className="profile-content">
        <div className="photo-section">
          <img
            src={`http://localhost:5000/static/imgs/usuarios/${usuario.fotoPerfil || "default.png"}`}
            alt="Foto del estudiante"
            className="student-photo"
          />
          <p className="username">@{usuario.nombreUsuario}</p>
        </div>
        <div className="info-section">
          <p><strong>Nombre completo:</strong> {usuario.nombreCompleto}</p>
          <p><strong>Fecha de registro:</strong> {usuario.fechaRegistro}</p>
          <p><strong>Lenguajes de programación:</strong> Cargando en la siguiente fase...</p>
          <p><strong>Nivel general:</strong> {usuario.nivel}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
