import './SigIn.css';
import { useState } from 'react';
import axios from "axios";


export const SignIn = () => {
    const [formData, setFormData] = useState({
    nombreCompleto: "",
    correoElectronico: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/sigin", formData);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Error al registrar");
    }
  };

  return (
    <div className="container-s">
      <h2 className="subtitle">Crear Cuenta</h2>
      <span className="title">[ A  R  R  A  Y ]</span>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombreCompleto" placeholder="Nombre completo" value={formData.nombreCompleto} onChange={handleChange} required />
        <input type="email" name="correoElectronico" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" value={formData.confirmPassword} onChange={handleChange} required />
        <a href="/login" className="login-link">¿Ya tienes una cuenta?</a>
        <button className="btn-registrar" type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default SignIn;
