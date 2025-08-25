import axios from "axios";
import { useEffect, useState } from "react";

export const Ejercicios = () => {
  return (
    <div className="ejercicios-container">
        <h1 className='title-bienvenida'>¡Bienvenido, Ejercicios diseñados solo para ti!, ¿Listo para empezar?</h1>
        <button>Aceptar Reto</button>
    </div>
  )
}
export default Ejercicios();