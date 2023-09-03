import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PublicRoute = ({ children }) => { //children son los componentes

    const { logged } = useContext( AuthContext ); // useContext -> para obtener el context -> AuthContext
  
    return ( !logged )
        ? children
        : <Navigate to="/marvel" />
}
