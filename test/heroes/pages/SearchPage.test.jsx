const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { SearchPage } = require("../../../src/heroes/pages/SearchPage");


describe('Pruebas en <SearchPage />', () => {

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                {/* <SearchPage /> */}
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();// borrar div

    });

    test('debe de mostrar a  Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('none');

    });

});