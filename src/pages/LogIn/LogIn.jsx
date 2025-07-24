import './LogIn.css';

export const LogIn = () => {
  return (
    <div className="container-login">
      <h2 className="subtitle">Iniciar Sesión</h2>
      <span className="title">[ A  R  R  A  Y ]</span>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <a href="/SigIn" className="register-link">¿No tienes una cuenta?</a>
        <button className="btn-iniciar" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LogIn;