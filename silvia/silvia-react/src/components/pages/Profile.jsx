import React from 'react'
import Navbar from '../Navbar'
import DefaultUser from "../../../public/perfil.png";
import "./profile.css"
const Profile = () => {
  const data = true;
  return (
    <div>
      <Navbar />
      <main>
        <div className='right'>
          <div>
            <img src={DefaultUser} alt="profile img" id='logo-profile'/>
            <div>
              <div className='input-container'>
                <h2>Datos de usuario</h2>
                <div className='text-user'>
                  {data ? <p>No registrado</p> : <p>{data.nombre}</p>}
                </div>
                <div className='text-user'>
                {data ? <p>No registrado</p> : <p>{data.email}</p>}
                </div>
                <div className='text-user'>
                {data ? <p>No registrado</p> : <p>{data.telefeno}</p>}
                </div>
                <div className='text-user'>
                {data ? <p>No registrado</p> : <p>{data.cedula}</p>}
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='left'>
          <h1>Vehiculos</h1>

          <div className='vehicle-card-container'>
            <div className='vehicle-card'>
              <h3>Vehiculo 1</h3>
              <h4>Modelo 1</h4>
              <h4>Placa</h4>
              <div className='btn-container'>
                <button className='info-card'>Editar informacion</button>
                <button className='info-card'>Elimiar</button>
                <button className='info-card'>Guardar Informacion</button>
              </div>
            </div>
            <div className='vehicle-card'>
              <h3>Vehiculo 1</h3>
              <h4>Modelo 1</h4>
              <h4>Placa</h4>
              <div className='btn-container'>
                <button className='info-card'>Editar informacion</button>
                <button className='info-card'>Elimiar</button>
                <button className='info-card'>Guardar Informacion</button>
              </div>
            </div>
            <div className='vehicle-card'>
              <h3>Vehiculo 1</h3>
              <h4>Modelo 1</h4>
              <h4>Placa</h4>
              <div className='btn-container'>
                <button className='info-card'>Editar informacion</button>
                <button className='info-card'>Elimiar</button>
                <button className='info-card'>Guardar Informacion</button>
              </div>
            </div>
            <div className='vehicle-card'>
              <h3>Vehiculo 1</h3>
              <h4>Modelo 1</h4>
              <h4>Placa</h4>
              <div className='btn-container'>
                <button className='info-card'>Editar informacion</button>
                <button className='info-card'>Elimiar</button>
                <button className='info-card'>Guardar Informacion</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile