/// <reference types="Cypress" />
import '../../src/index.css';
import { MemoryRouter } from 'react-router-dom';
import AsideFilters from '../../src/components/Catalog/components/AsideFilter/AsideFilters';
import ItemsSection from '../../src/components/Catalog/ItemsSection';
import Catalog from '../../src/components/Catalog/Catalog';

describe('Render Catalog View components', () => {
    const Component = ({ children }) => (
        <MemoryRouter>
            <section className="mx-1 flex flex-1 rounded-lg bg-gray-900 bg-opacity-95 px-3 pt-10 font-alegreya">
                {children}
            </section>
        </MemoryRouter>
    );

    describe('Aside Filters Component', () => {
        it('renders Aside Filters component with default filter options', () => {
            cy.mount(
                <Component>
                    <AsideFilters clearQueries={() => {}} />
                </Component>
            );

            cy.contains('Filter');
            cy.get('aside').children().as('filterOptions');
            cy.get('@filterOptions').contains('Price Range');
            cy.get('@filterOptions').contains('Category');
            cy.get('@filterOptions').contains('Rating');
            cy.get('@filterOptions').contains('Brand');
        });

        it('allows selecting price range with valid values', () => {
            cy.mount(
                <Component>
                    <AsideFilters clearQueries={() => {}} />
                </Component>
            );

            cy.get('#price-filter').children().last().as('priceRange');
            cy.get('@priceRange')
                .get("input[name='from']")
                .invoke('val', 5000)
                .trigger('change');

            cy.get('@priceRange')
                .get("input[name='from']")
                .should('have.value', '5000');

            cy.get('@priceRange')
                .get("input[name='to']")
                .invoke('val', 7000)
                .trigger('change');

            cy.get('@priceRange')
                .get("input[name='to']")
                .should('have.value', '7000');
        });

        it('allows selecting category', () => {
            cy.mount(
                <Component>
                    <AsideFilters clearQueries={() => {}} />
                </Component>
            );

            cy.get('#category').select('Machines');
            cy.get('#category').should('have.value', 'machines');
        });

        it('allows selecting rating', () => {
            cy.mount(
                <Component>
                    <AsideFilters clearQueries={() => {}} />
                </Component>
            );

            cy.get('#rating').select('5');
            cy.get('#rating').should('have.value', '5');
        });

        it('allows selecting brand', () => {
            cy.mount(
                <Component>
                    <AsideFilters clearQueries={() => {}} />
                </Component>
            );

            cy.get('#brand').select('brand1');
            cy.get('#brand').should('have.value', 'brand1');
        });
    });

    describe('ItemsSection Component', () => {
        it('renders spinner widget when there are no products', () => {
            cy.stub(window, 'fetch').resolves({
                json: cy.stub().resolves({ data: [] }),
            });

            cy.mount(
                <Component>
                    <Catalog />
                </Component>
            );

            cy.get('[data-test="spinner"]').should('exist');
        });

        it('renders products with correct information', () => {
            cy.mount(
                <Component>
                    <ItemsSection
                        data={[
                            {
                                product_id: '1',
                                title: 'Test Product',
                                image: '/image_1710060501743.jpg',
                                price: '1000',
                                type: 'cardio',
                            },
                        ]}
                    />
                </Component>
            );

            cy.contains('Test Product');
            cy.get('button').contains('Add to Cart').should('exist');
        });
    });
});
