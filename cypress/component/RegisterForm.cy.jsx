/// <reference types="Cypress" />
import '../../src/index.css';
import RegsiterForm from '../../src/components/Authentication/components/RegisterForm';
import { MemoryRouter } from 'react-router-dom';

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
                <RegsiterForm />
            </Component>
        );
    });
    it('should display Register form when rendered', () => {
        cy.contains(/Create a profile/i).should('be.visible');
    });
    it('should correctly set values in register form fields', () => {
        cy.get('#firstName').type('Testfirst', { delay: 20 });
        cy.get('#firstName').should('have.value', 'Testfirst');

        cy.get('#lastName').type('Testlast', { delay: 20 });
        cy.get('#lastName').should('have.value', 'Testlast');

        cy.get('#phoneNumber').type('+359 12 342 5678', { delay: 20 });
        cy.get('#phoneNumber').should('have.value', '+359 12 342 5678');

        cy.get('#email').type('test@mail.com', { delay: 20 });
        cy.get('#email').should('have.value', 'test@mail.com');

        cy.get('#password').type('test123456', { delay: 20 });
        cy.get('#password').should('have.value', 'test123456');

        cy.get('#re-password').type('test123456', { delay: 20 });
        cy.get('#re-password').should('have.value', 'test123456');

        cy.get("[data-test='error-']").should('not.exist');
    });
    it('should display error messages for invalid inputs in each form field', () => {
        cy.get('#firstName').focus();
        cy.get('#firstName').blur();
        cy.get("[data-test='error-firstName']").should('exist');

        cy.get('#lastName').focus();
        cy.get('#lastName').blur();
        cy.get("[data-test='error-lastName']").should('exist');

        cy.get('#phoneNumber').focus();
        cy.get('#phoneNumber').blur();
        cy.get("[data-test='error-phoneNumber']").should('exist');

        cy.get('#email').focus();
        cy.get('#email').blur();
        cy.get("[data-test='error-email']").should('exist');

        cy.get('#password').focus();
        cy.get('#password').blur();
        cy.get("[data-test='error-password']").should('exist');

        cy.get('#re-password').focus();
        cy.get('#re-password').blur();
        cy.get("[data-test='error-re-password']").should('exist');
    });
    it('should display error message when passwords do not match', () => {
        cy.stub(window, 'fetch').resolves({
            json: cy.stub().rejects(),
        });

        cy.get('#firstName').type('Testfirst', { delay: 20 });
        cy.get('#lastName').type('Testlast', { delay: 20 });
        cy.get('#phoneNumber').type('+359 12 342 5678', { delay: 20 });
        cy.get('#email').type('test@mail.com', { delay: 20 });
        cy.get('#password').type('test123456', { delay: 20 });
        cy.get('#re-password').type('test12345', { delay: 20 });

        cy.get('button[type=submit]').click();

        cy.get("[data-test='error-fetch']").should('be.visible');
    });
});
