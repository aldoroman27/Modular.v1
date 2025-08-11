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
      <section className="hero">
        <h2 className="welcome-title">¡Bienvenidos a <span>[A R R A Y]</span>!</h2>
        <p className="description">
          Aprende programación de forma divertida e interactiva, como si fuera un juego. 
          Mejora tus habilidades paso a paso con retos, lecciones y recompensas.
        </p>
        <button className="btn-start">🚀 Empieza ahora</button>
      </section>

      <section className="courses">
        <h3 className="courses-title"><BookOpen size={28} /> Cursos disponibles</h3>
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
};
