/// <reference types="Cypress" />
describe('Testing Login View', () => {
    beforeEach(() => {
        cy.visit('/login');
    });
    it('Should render the login view properly and correctly navigating between login and register', () => {
        cy.contains(/join the market/i).should('exist');
        cy.contains(/registered user/i).should('exist');

        cy.contains(/get started/i).click();
        cy.location('pathname').should('eq', '/register');

        cy.contains(/already an user/i).click();
        cy.location('pathname').should('eq', '/login');
    });
    it('Verify that a successful login request is intercepted, and the user is navigated to the home view', () => {
        cy.intercept(
            'POST',
            'http://localhost:5000/api/v1/user/sign-in',
            (req) => {
                req.reply({
                    statusCode: 200,
                    body: {
                        payload: {
                            id: '21',
                            token: 'jwttoken',
                        },
                    },
                });
            }
        ).as('signin');

        cy.get('#email').type('test@mail.com', { delay: 10 });
        cy.get('#password').type('test123456', { delay: 10 });

        cy.get('button[type=submit]').click();

        cy.wait('@signin');

        cy.url().should('eq', 'http://localhost:5173/');
        cy.contains(/top offer/i).should('exist');

        cy.getAllLocalStorage().then((result) => {
            expect(result).to.deep.equal({
                'http://localhost:5173': {
                    user: '{"id":"21","token":"jwttoken"}',
                },
            });
        });
    });
    it('Test if the login request is prevented when there are input errors', () => {
        cy.intercept(
            'POST',
            'http://localhost:5000/api/v1/user/sign-in',
            (req) => {
                req.reply({
                    statusCode: 422,
                    body: {
                        message: 'Login request faild',
                        stack: null,
                        errors: {
                            message: 'Email or password are incorrect!',
                        },
                    },
                });
            }
        ).as('signin');

        cy.get('#email').type('test@mail.com', { delay: 10 });
        cy.get('#password').type('test12345', { delay: 10 });

        cy.get('button[type=submit]').click();
        cy.wait('@signin');

        cy.get("[data-test='error-req']").should('exist');
    });
});
