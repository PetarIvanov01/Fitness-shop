/// <reference types="Cypress" />
import '../../src/index.css';
import { MemoryRouter } from 'react-router-dom';
import AsideFilters from '../../src/components/Catalog/components/AsideFilter/AsideFilters';
import ItemsSection from '../../src/components/Catalog/ItemsSection';

describe('Render Catalog View components', () => {
    const Component = ({ children }) => (
        <MemoryRouter>
            <section className="mx-1 flex flex-1 rounded-lg bg-gray-900 bg-opacity-95 px-3 pt-10 font-alegreya">
                {children}
            </section>
        </MemoryRouter>
    );

    describe('Testing Aside Filters', () => {
        it('Testing Aside Filters component', () => {
            cy.mount(
                <Component>
                    <AsideFilters clearQueries={() => {}} />
                </Component>
            );

            cy.contains('Filter');
            cy.get('aside').children().as('filt');
            cy.get('@filt').contains('Price Range');
            cy.get('@filt').contains('Category');
            cy.get('@filt').contains('Rating');
            cy.get('@filt').contains('Brand');
        });

        it('Testing Price filter component with valid values', () => {
            cy.mount(
                <Component>
                    <AsideFilters clearQueries={() => {}} />
                </Component>
            );

            cy.get('#price-filter').children().last().as('range');
            cy.get('@range')
                .get("input[name='from']")
                .invoke('val', 5000)
                .trigger('change');

            cy.get('@range')
                .get("input[name='from']")
                .should('have.value', '5000');

            cy.get('@range')
                .get("input[name='to']")
                .invoke('val', 7000)
                .trigger('change');

            cy.get('@range')
                .get("input[name='to']")
                .should('have.value', '7000');
        });

        it('Testing Category filter component', () => {
            cy.mount(
                <Component>
                    <AsideFilters clearQueries={() => {}} />
                </Component>
            );

            cy.get('#category').select('Machines');
            cy.get('#category').should('have.value', 'machines');
        });

        it('Testing Rating filter component', () => {
            cy.mount(
                <Component>
                    <AsideFilters clearQueries={() => {}} />
                </Component>
            );

            cy.get('#rating').select('5');
            cy.get('#rating').should('have.value', '5');
        });

        it('Testing Brand filter component', () => {
            cy.mount(
                <Component>
                    <AsideFilters clearQueries={() => {}} />
                </Component>
            );

            cy.get('#brand').select('brand1');
            cy.get('#brand').should('have.value', 'brand1');
        });
    });

    describe('Testing the section with all products', () => {
        it('Testing spinner widget when there is no products', () => {
            cy.mount(
                <Component>
                    <ItemsSection
                        data={[
                            {
                                product_id: '1',
                                title: 'Test',
                                image: '/image_1710060501743.jpg',
                                price: '1000',
                                type: 'cardio',
                            },
                        ]}
                    />
                </Component>
            );
            cy.contains('Test');
            cy.get('button').contains('Add to Cart');
        });
    });
});
