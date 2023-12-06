import React from 'react'
import Navbar from '../Navbar'
import { NavLink } from 'react-router-dom'
import "./reports.css"
const Reports = () => {
  return (
    <div>
    <Navbar />
    <main>
      <div className="vertical-menu">
        <ul>
          <li>
            <NavLink className={"lik"} to={"/"}>
              Inicio
            </NavLink>
          </li>
          <li>Recervar espacio</li>
          <li>Anual Reserva</li>
          <li>
            <NavLink className={"lik"} to={"/reports"}>
              Reportes
            </NavLink>
          </li>
          <li>Tarifas y pagos</li>
        </ul>
      </div>
      <div className="main-content">
      <div className='cards-container'>
        <div className="card-report">
          <h2>Informe Mensual</h2>
          <p>Este informe presenta un resumen de las actividades del mes anterior.</p>
          <button className='info-card'>Ver informacion</button>
        </div>
        <div className="card-report">
          <h2>Informe anual</h2>
          <p>El resumen anual con estadísticas clave y proyecciones futuras.</p>
          <button className='info-card'>Ver informacion</button>
        </div>
     </div>
      <div className='cards-container'>
        <div className="card-report">
          <h2>Informe Trimestral</h2>
          <p>Un análisis detallado de los resultados del último trimestre.</p>
          <button className='info-card'>Ver informacion</button>
        </div>
      </div>
      </div>
      <div className="right-content">
        <div className="title-container">
          <h1>Espacios Reservados</h1>
        </div>
        <div className="reserved-spaces">
          <div className="reserved-btn">Reserva 1</div>
          <div className="reserved-btn">Reserva 2</div>
          <div className="reserved-btn">Reserva 3</div>
          <div className="reserved-btn">Reserva 4</div>
          <div className="reserved-btn">Reserva 5</div>
          <div className="reserved-btn">Reserva 7</div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default Reports