import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "./login.css"
const Login = () => {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    email: "",
    password: ""
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataForm);
    navigate("/")
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm(prev => ({...prev, [name]: value}))
  };

  return (
    <main>
      <div className='form-container'>
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Correo Electronico</label>
            <input type="email" required id='email' name='email' />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input type="password" id='password' name='password' required />
          </div>
          <button type='submit'>Iniciar Sesion</button>
        </form>
        <p>No tienes cuenta?</p><span><NavLink to={"/register"}>Registrate</NavLink></span>
      </div>
    </main>
  )
}

export default Login;