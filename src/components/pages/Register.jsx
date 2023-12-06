import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const isNameValid = (name) => /^[a-zA-Z ]+$/.test(name);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Intenta obtener los usuarios actuales, asegurándote de que sea un array
    let currentUsers = JSON.parse(localStorage.getItem("userData"));
    if (!Array.isArray(currentUsers)) {
      currentUsers = []; // Si no es un array, inicializa como un array vacío
    }

    currentUsers.push(dataForm);
    localStorage.setItem("userData", JSON.stringify(currentUsers));
    alert("Te has registrado con éxito");
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main>
      <div className="form-container">
        <h1>Registrarse</h1>
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
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit">Iniciar Sesion</button>
        </form>
        <p>Ya tienes una cuenta?</p>
        <span>
          <NavLink to={"/login"}>Inicia sesion</NavLink>
        </span>
      </div>
    </main>
  );
};

export default Register;
