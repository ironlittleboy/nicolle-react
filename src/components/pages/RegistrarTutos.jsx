import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RegistrarTutos = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefono: "",
    matricula: "",
    hora: "",
    tema: "",
    tutor: "",
  });
  const registros = JSON.parse(localStorage.getItem("tutoriaData")) || []
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoId = Date.now();
    const nuevaData = { id: nuevoId, ...formData };
    setFormData((prevData) => [...prevData, nuevaData]);
    localStorage.setItem(
      "tutoriaData",
      JSON.stringify([...registros, nuevaData])
    );
    alert("tutoria guardada");
    navigate("/savedtutos");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <main>
      <div className="form-container">
        <h1>Registrar Tutoria</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Nombres</label>
            <input
              type="text"
              required
              id="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Matricula</label>
            <input
              type="text"
              required
              id="matricula"
              name="matricula"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Correo Electronico</label>
            <input
              type="email"
              required
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Telefono</label>
            <input
              type="text"
              id="telefono"
              name="cell"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Hora</label>
            <input
              type="datetime-local"
              id="hora"
              name="hora"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Tema</label>
            <input
              type="text"
              id="tema"
              name="tema"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Tutor</label>
            <input
              type="text"
              id="tutor"
              name="tutor"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit">Registrar tutoria</button>
        </form>
        <span>
          <NavLink to={"/savedtutos"}>Ver tutorias asignadas</NavLink>
        </span>
      </div>
    </main>
  );
};

export default RegistrarTutos;
