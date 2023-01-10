/// <reference types="cypress" />

describe("Locators", () => {

    beforeEach(() => {
        cy.visit("/elements");
    })

    it("locating elements with get", () => {
        // Getting elements by tag name
        cy.get("button");

        // Getting elements by class name
        cy.get(".btn-with-class");

        // Getting elements with specific classes
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

        // Getting all elements by tagname and class
        cy.get("button.Elements-btn");

        // Ge all elements by tab name, class and type attributes
    })

})