import './LogIn.css';
import { useState, useEffect } from 'react';
import axios from "axios";


export const LogIn = () => {

  const [formData, setFormData] = useState({
    correoElectronico:"",
    password:""
  });

  const[mensajeExito, setMensajeExito] = useState("")
  const[errores, setErrores] = useState([]);


  useEffect(() => {
    if (errores.length > 0 || mensajeExito){
      const timer =  setTimeout(() =>{
        setErrores([]);
        setMensajeExito("");
      },4000);
      return () => clearTimeout(timer);
    }
  },[errores, mensajeExito]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]:value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrores([]),
    setMensajeExito("");
    
    //Intentamos realizar la petición a nuestro endpoint.
    try{
      const response = await axios.post(
        "http://localhost:5000/Login",
        {
          correoElectronico: formData.correoElectronico,
          password: formData.password
        },
        {
          headers: {"Content-Type":"application/json"}
        }
      );
      console.log("Respuesta del backend", response.data);
      setMensajeExito("Inicio de sesión correcto");

      setFormData({
        correoElectronico:"",
        password:""
      });
    }catch(error){
      if(error.response){
        setErrores([error.response.data.message || "Credenciales incorrectas, intente nuevamente"]);
      }else{
        setErrores(["Error al conectarse con el servidor"])
      }
    }
  }

   return (
    <div className="container-login">
      <h2 className="subtitle">Iniciar Sesión</h2>
      <span className="title">[ A  R  R  A  Y ]</span>

      {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}
      {errores.length > 0 && (
        <div className="errores">
          <ul>
            {errores.map((err, idx) => <li key={idx}>{err}</li>)}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="correoElectronico"
          placeholder="Correo electrónico"
          value={formData.correoElectronico}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <a href="/SigIn" className="register-link">¿No tienes una cuenta?</a>
        <button className="btn-iniciar" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LogIn;