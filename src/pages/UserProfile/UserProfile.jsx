import React from 'react';
import "./UserProfile.css";

export const UserProfile = ({photo, username, fullName, birthDate, lenguages, experience}) => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Información del estudiante</h1>
      <div className="profile-content">
        <div className="photo-section">
          <img src={photo} alt="Foto del estudiante" className="student-photo" />
          <p className="username">@{username}</p>
        </div>
        <div className="info-section">
          <p><strong>Nombre completo:</strong> {fullName}</p>
          <p><strong>Fecha de nacimiento:</strong> {birthDate}</p>
          <p><strong>Lenguajes de programación:</strong> {lenguages.join(", ")}</p>
          <p><strong>Experiencia:</strong> {experience}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile