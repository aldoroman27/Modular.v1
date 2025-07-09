import React from 'react';
import './SigIn.css';

export const SignIn = () => {
  return (
    <div className="container-s">
      <h2 className="subtitle">Crear Cuenta</h2>
      <span className="title">[ A  R  R  A  Y ]</span>
      <form>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="password" placeholder="Confirmar contraseña" required />
        <a href="/login" className="login-link">¿Ya tienes una cuenta?</a>
        <button className="btn-registrar" type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default SignIn;
