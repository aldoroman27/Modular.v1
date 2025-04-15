import React from 'react'
import './LogIn.css'
export const LogIn = () => {
  return (
    <div className="container-l">
      <h1 className="subtitle">Iniciar Sesión</h1>
            <span className="title">[ A  R  R  A  Y ]</span>
            <form>
                <input type="text" placeholder="Correo electronico registrado" />
                <input type="password" placeholder="Contraseña" />
                <a href="/register">¿No tiene una cuenta?</a>
                <button className="btn-iniciar">Iniciar Sesion</button>
            </form>
        </div>
  )
}
export default LogIn