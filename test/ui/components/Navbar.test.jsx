import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";

import { Navbar } from "../../../src/ui/components/Navbar";
import { MemoryRouter } from 'react-router-dom'

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


    });
});