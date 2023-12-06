import React, { useState } from "react";
import Logo from "../../../public/logouleam.png";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
const BuscarGraduado = () => {
  const [formData, setFormData] = useState({
    cedula: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error("Esta funcion no está disponible")
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
        <h1>Buscar Graduado</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Cedula</label>
            <input type="text" id="cedula" name="cedula" />
          </div>
          <div>
            <button type="submit">Buscar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuscarGraduado;
