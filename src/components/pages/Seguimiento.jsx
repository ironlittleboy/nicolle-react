import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Seguimiento = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('tutoriaData')) || []);
  return (
    <div className='root'>
      <div className='card'>
        <h1>Seguimiento</h1>
        <h4>Informacion del estudiante</h4>
        <form action="">
          <div>
            <label htmlFor="">Nombre</label>
            <input type="text" placeholder='Nombres'/>
          </div>
          <div>
            <label htmlFor="">Matricula</label>
            <input type="text" placeholder='Matricula'/>
          </div>
          <button>Siguiente</button>
        </form>
        <NavLink to={"/"}>Regresar</NavLink>
        <h3>Tabla de segiumiento</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Matricula</th>
              <th>Fehca</th>
              <th>Tema</th>
              <th>Tutor</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.matricula}</td>
                <td>{item.hora}</td>
                <td>{item.tema}</td>
                <td>{item.tutor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Seguimiento