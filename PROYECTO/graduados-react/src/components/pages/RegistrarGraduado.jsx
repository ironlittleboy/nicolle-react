import React, { useState } from 'react'
import Logo from '../../../public/logouleam.png'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const RegistrarGraduado = () => {
  const [formData, setFormData] = useState({
    cedula: "",
    name: "",
    lastname: "",
    direccion: "",
    telefono: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Estudiante almacenado")
  };
  const handleChange = (e) => {
    setFormData({
    ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
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
        <h1>Registrar Graduado</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Cedula</label>
            <input type="text" id="cedula" name="cedula" value={formData.cedula} onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Nombre</label>
            <input type="text" id="nombre" name="name"  value={formData.name} onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Apellidos</label>
            <input type="text" id="apellidos" name="lastname" value={formData.lastname} onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Direccion</label>
            <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Telefono</label>
            <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Correo</label>
            <input type="text" id="correo" name="email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Fecha de graduo</label>
            <input type="date" id="date" name="date" />
          </div>
          <div>
            <button type="submit">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrarGraduado