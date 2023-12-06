import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data.email === formData.email && data.password === formData.password) {
      navigate("/");
      return alert("inicio de sesion exitoso");
    }
    return alert("credenciales invalidas");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="form-container">
          <h2>Iniciar sesion</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Correo Electronico</label>
              <input
                type="email"
                placeholder="Correo electronico"
                required
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
            </div>
            <div>
              <label htmlFor="">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                required
                onChange={handleChange}
                name="password"
                value={formData.password}
              />
            </div>
            <button className="info-card bg-green text-white">
              Iniciar Sesion
            </button>
          </form>
          <NavLink to={"/register"}>Registrarse</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
