class ProductPage {
    elements = {
        titleSpan: () => cy.get(".title")
    }

    sectionTitle() {
        this.elements.titleSpan;
    };
}

export const productPage = new ProductPage();