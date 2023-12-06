import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/logouleam.png";
import "./regiser.css";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    cedula: "",
    profesion: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userdata", JSON.stringify(formData));
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="main">
      <header>
        <div>
          <img src={Logo} alt="" id="logo" />
        </div>
        <ul>
          <li>
            <NavLink className={"text-black"} to={"/"}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink className={"text-black"} to={"/buscargraduado"}>
              Buscar Graduado
            </NavLink>
          </li>
          <li>
            <NavLink className={"text-black"} to={"/registrar"}>
              Registrar Graduado
            </NavLink>
          </li>
          <li>
            <NavLink className={"text-black"} to={"/register"}>
              Registrarse / Inicar sesion
            </NavLink>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Nombres</label>
            <input type="text" id="name" name="name" onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Apellidos</label>
            <input type="text" id="lastname" name="lastname" onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Cedula</label>
            <input type="text" id="cedula" name="cedula" onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Profesion</label>
            <input type="text" id="profesion" name="profesion" onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input type="password" id="password" name="password" onChange={handleChange} required/>
          </div>
          <div>
            <button type="submit">Registrarse</button>
          </div>
          Ya tienes una cuenta? <NavLink to={"/login"}>Inicia sesion!</NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
