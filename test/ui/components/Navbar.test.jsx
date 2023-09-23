import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";

import { Navbar } from "../../../src/ui/components/Navbar";
import { MemoryRouter, useNavigate } from 'react-router-dom';

const mockedUseNavigate = jest.fn(); // aqui simulamos una funcion

jest.mock('react-router-dom', () => ({ // hara un mock de todos sus exports, entonces hay expecificar que solo haga mock de lo que queremos
   
    ...jest.requireActual('react-router-dom'), // esparsir todo lo de la libreria , excepto
    useNavigate: () => mockedUseNavigate, //solo se va a sobreescribir use navigate(usado mas para suplantar hooks originales)

}));

describe('Pruebas en <Navbar/>', () => {

    const contextValue = {
        logged:true,
        user: {
            name: 'Juan Carlos'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Juan Carlos') ).toBeTruthy();
        // screen.debug();

    });

    test('debe de llamar el logout y navigate cuando se hace click en el botón ', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button'); // es el unico boton
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled(); // una funcion
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true}); // una funcion dentro de la funcion, pero es un hook

    });
});