import React from "react";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";
import "./home.css";
const Home = () => {
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
            <li><NavLink to={"/login"}>Iniciar sesion</NavLink></li>
          </ul>
        </div>
        <div className="main-content">
          <div>
            <h1>Espacios Generales</h1>
            <div className="space-container">
              <div className="card-container">
                <div className="card">
                  <div className="card-text">Espacio 1</div>
                  <div className="color"></div>
                </div>
                <div className="card">
                  <div className="card-text">Espacio 2</div>
                  <div className="color"></div>
                </div>
                <div className="card">
                  <div className="card-text">Espacio 3</div>
                  <div className="color"></div>
                </div>
                <div className="card">
                  <div className="card-text">Espacio 4</div>
                  <div className="color"></div>
                </div>
              </div>
              <div  className="card-container">
                <div className="card">
                  <div className="card-text">Espacio 5</div>
                  <div className="color"></div>
                </div>
                <div className="card">
                  <div className="card-text">Espacio 6</div>
                  <div className="color"></div>
                </div>
                <div className="card">
                  <div className="card-text">Espacio 7</div>
                  <div className="color"></div>
                </div>
                <div className="card">
                  <div className="card-text">Espacio 8</div>
                  <div className="color"></div>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <div className="info-card bg-green text-white">Disponible</div>
              <div className="info-card bg-red text-white">No disponible</div>
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
  );
};

export default Home;
