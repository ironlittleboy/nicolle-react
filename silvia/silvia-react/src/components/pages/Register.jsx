import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import { useState } from "react";
import "./register.css"
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    telefono: "",
    cedula: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("registrado con exito");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="form-container">
          <h2>Iniciar sesion</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Nombres completos</label>
              <br />
              <input
                type="text"
                placeholder="Nombres"
                required
                id="name"
                onChange={handleChange}
                name="name"
                value={formData.name}
              />
            </div>
            <div>
              <label htmlFor="">Telefono</label>
              <br />
              <input
                type="text"
                placeholder="Telefono"
                required
                id="telefono"
                onChange={handleChange}
                name="telefono"
                value={formData.telefono}
              />
            </div>
            <div>
              <label htmlFor="">Cedula</label>
              <br />
              <input
                type="text"
                placeholder="Cedula"
                required
                id="cedula"
                onChange={handleChange}
                name="cedula"
                value={formData.cedula}
              />
            </div>
            <div>
              <label htmlFor="">Correo Electronico</label>
              <br />
              <input
                type="email"
                placeholder="Correo Electronico"
                required
                id="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
            </div>
            <div>
              <label htmlFor="">Contraseña</label>
              <br />
              <input
                type="password"
                placeholder="Contraseña"
                id="password"
                required
                onChange={handleChange}
                name="password"
                value={formData.password}
              />
            </div>
            <button type="submit" className="info-card bg-green text-white">
              Registrarse
            </button>
          </form>
          <NavLink to={"/login"}>Inicar Sesion</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
