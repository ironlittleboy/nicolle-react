import React from 'react'
import "./home.css"
import Logo from "../../../public/logouleam.png"
import { NavLink } from 'react-router-dom'
const Home = () => {
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
      <main>
        <h1 className='text-white'>Bienvenidos al sistema de seguimiento de Graduados
        </h1>
        <p className='text-white'>Mantente conectado con los graduados de la ULEAM</p>
      </main>
      <footer>
        <h3>Universidad Laica Eloy alfaro de Manabi</h3>
      </footer>
    </div>
  )
}

export default Home