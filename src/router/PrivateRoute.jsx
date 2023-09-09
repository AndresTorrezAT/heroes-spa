import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PrivateRoute = ({ children }) => { //children son los componentes
    
    const { logged } = useContext( AuthContext ); // useContext -> para obtener el context -> AuthContext
    const { pathname, search } = useLocation(); // obteiene el url

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );
    // console.log('re-render');


    return ( logged )
        ? children
        : <Navigate to="/login" />
}
