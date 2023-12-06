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
    const registeredUsers = JSON.parse(localStorage.getItem('userData')) || [];
    if (Array.isArray(registeredUsers)) {
      // Buscar un usuario que coincida con el email y la contraseña
      const user = registeredUsers.find(user => user.email === dataForm.email && user.password === dataForm.password);

      if (user) {
        // Si el usuario existe y la contraseña coincide
        localStorage.setItem('loggedIn', true);
        alert('Inicio de sesión exitoso');
        navigate('/'); // Redireccionar a la página principal
      } else {
        // Si no se encuentra el usuario o la contraseña no coincide
        alert('Correo electrónico o contraseña incorrectos');
      }
    } else {
      alert("Error en la base de datos de usuarios.");
    }
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
            <input type="email" required id='email' name='email' onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input type="password" id='password' name='password' required onChange={handleChange}/>
          </div>
          <button type='submit'>Iniciar Sesion</button>
        </form>
        <p>No tienes cuenta?</p><span><NavLink to={"/register"}>Registrate</NavLink></span>
      </div>
    </main>
  )
}

export default Login;