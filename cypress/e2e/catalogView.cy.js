/// <reference types="Cypress" />

// Value setter for input element
const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
).set;

describe('Testing Catalog View', () => {
    let URL = 'http://localhost:5000/api/v1/catalog';
    beforeEach(() => {
        cy.visit('/');
    });
    it('Navigate from home to the catalog view with cardio category', () => {
        cy.intercept(`${URL}?from=0&to=10000&category=cardio&sort_by=asc`, {
            statusCode: 200,
            fixture: '/catalog/cardio.json',
        }).as('getCatalog');

        cy.get('[data-cy="cardio"]').then((el) => {
            el[0].click();
        });
        cy.wait('@getCatalog').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
        });

        cy.get('[alt="Test"]').should('be.visible');
        cy.get('#category').should('have.value', 'cardio');
    });
    it('Navigate from home to the catalog view with machines category', () => {
        cy.intercept(`${URL}?from=0&to=10000&category=machines&sort_by=asc`, {
            statusCode: 200,
            fixture: '/catalog/machines.json',
        }).as('getCatalog');

        cy.get('[data-cy="machines"]').then((el) => {
            el[0].click();
        });

        cy.wait('@getCatalog').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
        });

        cy.get('[alt="Test"]').should('be.visible');
        cy.get('#category').should('have.value', 'machines');
    });
    it('Filters cardio products by price range upon change', () => {
        cy.intercept(`${URL}?from=0&to=10000&category=cardio&sort_by=asc`, {
            statusCode: 200,
            fixture: '/catalog/cardio.json',
        }).as('getCatalog');

        const FROM = 3000;
        const TO = 5000;

        cy.intercept(
            `${URL}?from=${FROM}&to=${TO}&category=cardio&sort_by=asc`,
            {
                statusCode: 200,
                fixture: '/catalog/cardio-price-filter.json',
            }
        ).as('getFilteredPriceRange');

        cy.get('[data-cy="cardio"]').then((el) => {
            el[0].click();
        });

        cy.wait('@getCatalog', { timeout: 5000 }).then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
        });

        cy.get('[alt="Test"]').should('have.length', 4);

        cy.get('[name="from"]')
            .as('priceFrom')
            .then((el) => {
                const value = FROM;
                const range = el[0];
                nativeInputValueSetter.call(range, value);
                range.dispatchEvent(
                    new Event('change', { value, bubbles: true })
                );
            });

        cy.get('[name="to"]')
            .as('priceTo')
            .then((el) => {
                const value = TO;
                const range = el[0];
                nativeInputValueSetter.call(range, value);
                range.dispatchEvent(
                    new Event('change', { value, bubbles: true })
                );
            });

        cy.wait('@getFilteredPriceRange', { timeout: 5000 }).then(
            (interception) => {
                expect(interception.response.statusCode).to.equal(200);
            }
        );

        cy.get('[alt="Test"]').should('have.length', 2);

        cy.get('@priceFrom').should('have.value', FROM);
        cy.get('@priceTo').should('have.value', TO);
    });
    it('Invalid price range not fetching new data', () => {
        const PRICE_URL = (from, to) =>
            `${URL}?from=${from}&to=${to}&sort_by=asc`;

        cy.intercept('GET', PRICE_URL(0, 10000), (req) => {
            req.reply({
                statusCode: 200,
                body: {
                    itemsLng: 0,
                    result: [],
                },
            });
        }).as('getCatalog');

        const InvalidFrom = 4000;
        const InvalidTo = 2000;

        cy.intercept('GET', PRICE_URL(InvalidFrom, InvalidTo), (req) => {
            req.reply({
                statusCode: 200,
                body: {
                    itemsLng: 0,
                    result: [],
                },
            });
        }).as('invalidCatalog');

        cy.get('[data-cy="aside-nav"]').click();
        cy.get('[data-cy="catalog"]').click();
        cy.wait('@getCatalog', { timeout: 5000 });

        cy.get('[name="from"]')
            .as('priceFrom')
            .then((el) => {
                const value = InvalidFrom;
                const range = el[0];
                nativeInputValueSetter.call(range, value);
                range.dispatchEvent(
                    new Event('change', { value, bubbles: true })
                );
            });

        cy.get('[name="to"]')
            .as('priceTo')
            .then((el) => {
                const value = InvalidTo;
                const range = el[0];
                nativeInputValueSetter.call(range, value);
                range.dispatchEvent(
                    new Event('change', { value, bubbles: true })
                );
            });

        cy.wait(2000);

        cy.get('@invalidCatalog').should('not.exist');

        cy.get('@priceFrom').should('have.value', InvalidFrom);
        cy.get('@priceTo').should('have.value', InvalidTo);
    });
});
