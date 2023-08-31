import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";



export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {

    login( 'Andres Torrez' );

    navigate('/', {
      replace: true// evita que pueda regresar al historial anterior (a la ultima) se va directo a una anterior a esa
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
