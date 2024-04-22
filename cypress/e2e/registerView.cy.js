/// <reference types="Cypress" />
describe('Testing Register View', () => {
    beforeEach(() => {
        cy.visit('/register');
    });
    it('Should render the register view properly', () => {
        cy.contains(/join the market/i);
        cy.contains(/create a profile/i);
    });
    it('Verify that a successful registration request is intercepted, and the user is navigated to the home view.', () => {
        cy.clearAllLocalStorage();

        let firstName = 'Test';
        let lastName = 'Testov';
        cy.intercept(
            'POST',
            'http://localhost:5000/api/v1/users/sign-up',
            (req) => {
                req.reply({
                    statusCode: 200,
                    body: {
                        payload: {
                            email: 'test@mail.com',
                            fullName: `${firstName} ${lastName}`,
                            id: '21',
                            token: 'jwttoken',
                        },
                    },
                });
            }
        ).as('signup');

        cy.get('#firstName').type(firstName, { delay: 10 });
        cy.get('#lastName').type(lastName, { delay: 10 });
        cy.get('input[name=phoneNumber]').type('12 342 5678', {
            delay: 10,
        });
        cy.get('#email').type('test@mail.com', { delay: 10 });
        cy.get('#password').type('test123456', { delay: 10 });
        cy.get('#re-password').type('test123456', { delay: 10 });

        cy.get('button[type=submit]').click();

        cy.wait('@signup')
            .then((interception) => {
                expect(interception.response.statusCode).to.equal(200);
            })
            .url()
            .should('eq', 'http://localhost:5173/');

        cy.contains(/top offer/i).should('exist');

        cy.getAllLocalStorage().then((result) => {
            expect(result).to.deep.equal({
                'http://localhost:5173': {
                    user: '{"id":"21","token":"jwttoken"}',
                },
            });
        });
    });
    it('Test if the registration request is prevented when there are input errors.', () => {
        cy.get('#firstName').type('T', { delay: 10 });
        cy.get('#lastName').type('T', { delay: 10 });
        cy.get('input[name=phoneNumber]').type('+359 12 342 5678', {
            delay: 10,
        });
        cy.get('#email').type('test@mail.com', { delay: 10 });
        cy.get('#password').type('test123456', { delay: 10 });
        cy.get('#re-password').type('test123456', { delay: 10 });

        cy.get('button[type=submit]').click({ force: true });

        cy.get("[data-test='error-firstName']").should('exist');
        cy.get("[data-test='error-lastName']").should('exist');
    });
    it('Test the scenario where registration fails due to mismatched passwords.', () => {
        cy.get('#firstName').type('Test', { delay: 10 });
        cy.get('#lastName').type('Testov', { delay: 10 });
        cy.get('input[name=phoneNumber]').type('+359 12 342 5678', {
            delay: 10,
        });
        cy.get('#email').type('test@mail.com', { delay: 10 });
        cy.get('#password').type('test12345', { delay: 10 });
        cy.get('#re-password').type('test123456', { delay: 10 });

        cy.get('button[type=submit]').should('not.be.disabled').click();

        cy.get('#password').should('have.class', 'border-red-500');
        cy.get('#re-password').should('have.class', 'border-red-500');

        cy.contains(/Password doesn't matched/i).should('exist');
    });
});
