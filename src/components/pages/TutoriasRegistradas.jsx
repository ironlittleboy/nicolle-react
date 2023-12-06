import React, { useState } from 'react'
import "./tutorias-registradas.css";
import { NavLink } from 'react-router-dom';

const TutoriasRegistradas = () => {
  const [tutoriasDatos, setTutoriasDatos] = useState(JSON.parse(localStorage.getItem("tutoriaData")) || [])

  const handleDelete = (id) => {
    const nuevoArray = tutoriasDatos.filter(objeto => objeto.id !== id);
    setTutoriasDatos(nuevoArray)

  }
  return (
    <section className='root'>
      <div className='tutoria-container'>
        {tutoriasDatos ? (
          <>
          <h1>Tutorias Asignadas</h1>
          <div>
          <table>
            <thead>
              <tr>
                <td>Nombre</td>
                <td>correo Electronico</td>
                <td>Telefono</td>
                <td>Hora</td>
                <td>Tema</td>
                <td>Tutor</td>
                <td>Opcion</td>
              </tr>
            </thead>
            <tbody>
              {tutoriasDatos.map((tutoria, index) => (
                <tr key={tutoria.id}>
                  <td>{tutoria.name}</td>
                  <td>{tutoria.email}</td>
                  <td>{tutoria.cell}</td>
                  <td>{tutoria.hora}</td>
                  <td>{tutoria.tema}</td>
                  <td>{tutoria.tutor}</td>
                  <td><button onClick={() => handleDelete(tutoria.id)}>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></>
      
        ) : (
          <div>
            <h2>No hay tutorias registradas</h2>
            <NavLink to={"/"}>Regresar</NavLink>
          </div>
          )}
            <NavLink to={"/"}>Regresar</NavLink>
          
      </div>
    </section>
  )
}

export default TutoriasRegistradas