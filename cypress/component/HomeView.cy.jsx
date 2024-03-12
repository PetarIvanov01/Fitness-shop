/// <reference types="Cypress" />
import '../../src/index.css';
import { MemoryRouter } from 'react-router-dom';
import TopOffers from '../../src/components/Main/TopOffer/TopOffer';
import EquipCategories from '../../src/components/Main/EquipCategories/EquipCat';
import OtherItems from '../../src/components/Main/OtherItems/OtherItems';

describe('Render Home View components', () => {
    const Component = ({ children }) => (
        <MemoryRouter>
            <section>{children}</section>
        </MemoryRouter>
    );

    it('Render Top Offers section', () => {
        cy.mount(
            <Component>
                <TopOffers />
            </Component>
        );
        cy.get('h1').contains('Top Offers');
        cy.get('button').contains('Order');
    });

    it('Render EquipCategories section', () => {
        cy.mount(
            <Component>
                <EquipCategories />
            </Component>
        );
        cy.contains('Explore Fitness');

        cy.get('article').children().as('categ');

        cy.get('@categ').should('have.length', 3);
        cy.get('@categ').get('a').should('have.attr', 'href');

        cy.get('@categ')
            .first()
            .should('have.text', 'Machines')
            .next()
            .should('have.text', 'Cardio')
            .next()
            .should('have.text', 'Free Weights');
    });

    it('Render OtherItems section', () => {
        cy.mount(
            <Component>
                <OtherItems />
            </Component>
        );
        cy.get('header > h1')
            .should('be.visible')
            .invoke('text')
            .should('match', /explore more/i);

        cy.get('.animate-slide-up').contains('Price');
    });
});
