const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
// const { SearchPage } = require("../../../src/heroes/pages/SearchPage");


describe('Pruebas en <SearchPage />', () => {

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                {/* <SearchPage /> */}
            </MemoryRouter>
        );

        expect(container).toMatchInlineSnapshot(`<div />`);

    });

});