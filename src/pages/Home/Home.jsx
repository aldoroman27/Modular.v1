import React from 'react';
import { BookOpen } from "phosphor-react";
import "./Home.css";

export const Home = () => {
  const cursos = [
    { nombre: "Python", logo: "Logos/python.png" },
    { nombre: "C#", logo: "Logos/csharp.png" },
    { nombre: "C++", logo: "Logos/c++.png" },
    { nombre: "Java", logo: "Logos/java.png" },
    { nombre: "JavaScript", logo: "Logos/javascript.png" },
    { nombre: "React", logo: "Logos/react.png" },
  ];
  return (
      <main className="main-content">
        <div className="hero">
          <h2 className="welcome-title">¡Bienvenidos a [A R R A Y]!</h2>
          <p className="description">
            Aprende programación de forma divertida e interactiva, como si fuera un juego. Mejora tus habilidades paso a paso con retos, lecciones y recompensas.
          </p>
          <button className="btn btn-start">Empieza ahora</button>
        </div>

      <section className="courses">
        <h3><BookOpen size={24} /> Cursos disponibles</h3>
        <div className="course-grid">
          {cursos.map((curso, idx) => (
            <div key={idx} className="course-card">
              <img src={curso.logo} alt={curso.nombre} className="course-logo" />
              <span>{curso.nombre}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
