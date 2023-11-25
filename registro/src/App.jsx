import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Campo requerido";
    }
    if (!formData.email) {
      newErrors.email = "Campo requerido";
    }
    if (!formData.password) {
      newErrors.password = "Campo requerido";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);

    // Si no hay errores, realizar la lógica de registro aquí
    if (Object.keys(newErrors).length === 0) {
      // Realizar la lógica de registro aquí (puede ser una llamada a una API, etc.)
      console.log("Formulario válido. Realizar la lógica de registro.");
    }
  };

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Crea una cuenta</h2>
        <div className="input-group">
          <h4>o usa tu correo para registrarte</h4>
          <label>Nombre de Usuario</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="input-group">
          <label>Correo Electrónico</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input-group">
          <label>Contraseña</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="input-group">
          <label>Confirmar Contraseña</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Registrarte</button>
      </form>
    </div>
  );
}

export default App;
