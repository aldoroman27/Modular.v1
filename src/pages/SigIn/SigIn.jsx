import { useEffect, useState } from "react";
import axios from "axios";
import "./SigIn.css";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    correoElectronico: "",
    nombreUsuario: "",
    password: "",
    confirmPassword: ""
  });

  const [mensajeExito, setMensajeExito] = useState("");
  const [errores, setErrores] = useState([]);
  useEffect(() => {
    // Si hay algún mensaje de error o de éxito...
    if (errores.length > 0 || mensajeExito) {
      // ...inicia un temporizador.
      const timer = setTimeout(() => {
        // Después de 4 segundos, limpia ambos mensajes.
        setErrores([]);
        setMensajeExito("");
      }, 4000); // 4000 milisegundos = 4 segundos

      // Función de limpieza: si el componente se desmonta, limpia el temporizador.
      return () => clearTimeout(timer);
    }
  }, [errores, mensajeExito]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrores([]);
    setMensajeExito("");

    // Validación básica
    if (formData.password !== formData.confirmPassword) {
      setErrores(["⚠️ Las contraseñas no coinciden"]);
      return;
    }

    const payload = {
      nombreCompleto: formData.nombreCompleto,
      correoElectronico: formData.correoElectronico,
      nombreUsuario: formData.nombreUsuario,
      password: formData.password,
      confirmPassword: formData.confirmPassword
    }
    
    console.log("Enviando el siguiente payload", JSON.stringify(payload, null,2));
    try {
      console.log(formData);
        await axios.post(
        "http://localhost:5000/signin",
        payload,
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      setMensajeExito("✅ Usuario registrado correctamente");
      // Limpiamos el formulario
      setFormData({
        nombreCompleto: "",
        correoElectronico: "",
        nombreUsuario: "",
        password: "",
        confirmPassword: ""
      });

    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Marshmallow devuelve errores de validación en error.response.data.error
        setErrores(error.response.data.error ? Object.values(error.response.data.error).flat() : ["⚠️ Error de validación desconocido"]);
      } else {
        setErrores(["❌ Error al conectar con el servidor"]);
      }
    }
  };

  return (
    <div className="container-s">
      <h2 className="subtitle">Crear Cuenta</h2>
      <span className="title">[ A R R A Y ]</span>

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
          type="text"
          name="nombreCompleto"
          placeholder="Nombre completo"
          value={formData.nombreCompleto}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correoElectronico"
          placeholder="Correo electrónico"
          value={formData.correoElectronico}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nombreUsuario"
          placeholder="Nombre de usuario"
          value={formData.nombreUsuario}
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-registrar">Registrarse</button>
      </form>
    </div>
  );
};

export default SignIn;
