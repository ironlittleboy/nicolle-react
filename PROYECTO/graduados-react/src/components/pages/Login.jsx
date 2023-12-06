import React, { useState } from 'react'
import Logo from '../../../public/logouleam.png'
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if(localStorage.getItem("userdata")) {
      const {email, password} = JSON.parse(localStorage.getItem('userdata'));
      if(email == formData.email && password == formData.password) {
        toast.success("Sesion iniciada");
      } else {
        toast.error("Credenciales incorrectas");
      }
    } else {
      toast.error("No hay datos de usuarios registrados");
    }
  }
  const handleChange = (e) => {
    setFormData({
    ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className='main'>
      <header>
        <div>
          <img src={Logo} alt="" id="logo" />
        </div>
        <ul>
          <li><NavLink className={"text-black"} to={"/"}>Inicio</NavLink></li>
          <li><NavLink className={"text-black"} to={"/buscargraduado"}>Buscar Graduado</NavLink></li>
          <li><NavLink className={"text-black"} to={"/registrar"}>Registrar Graduado</NavLink></li>
          <li><NavLink className={"text-black"} to={"/register"}>Registrarse / Inicar sesion</NavLink></li>
        </ul>
      </header>
      <div className="content">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input type="password" id='password' name='password' value={formData.password} onChange={handleChange} required/>
          </div>
          <div>
            <button type='submit'>Iniciar Sesion</button>
          </div>
          No tienes una cuenta? <NavLink to={"/register"}>Registrarse!</NavLink>
        </form>
      </div>
    </div>
  )
}

export default Login