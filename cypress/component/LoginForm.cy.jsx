/// <reference types="Cypress" />
import '../../src/index.css';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from '../../src/components/Authentication/components/LoginForm';

describe('Testing Login From', () => {
    const Component = ({ children }) => (
        <MemoryRouter>
            <section className="my-20 flex  flex-col bg-slate-900 bg-opacity-95 px-10 py-8 max-sm:text-[0.8em] ">
                {children}
            </section>
        </MemoryRouter>
    );
    beforeEach(() => {
        cy.mount(
            <Component>
                <LoginForm />
            </Component>
        );
    });
    it('should display login form', () => {
        cy.contains(/Registered user/i).should('be.visible');
    });
    it('should set correct values in login form fields', () => {
        cy.get('#email').type('example@gmail.com');
        cy.get('#email').should('have.value', 'example@gmail.com');

        cy.get('#password').type('123456');
        cy.get('#password').should('have.value', '123456');
    });
    it('should display error on submit with invalid data', () => {
        cy.stub(window, 'fetch').resolves({
            json: cy.stub().rejects({
                message: 'Login request faild',
                errors: { message: 'Email or password are incorrect!' },
            }),
        });

        cy.get('#email').type('example@gmail.com');
        cy.get('#password').type('123456');

        cy.get('button').click();
        cy.get('button')
            .siblings()
            .invoke('text')
            .should('match', /email or password are incorrect!/i);
    });
});
