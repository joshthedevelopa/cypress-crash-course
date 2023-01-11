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
        cy.getByTestId('btn-id-1')
    })

    it("locating elements with contains", () => {
        // Get element by text
        cy.contains("Unique Text");

        // Get element by no unique text
        cy.contains("Not Unique Text");

        // With selector 
        cy.contains("[type='submit']", "Not Unique Text");

        // Can be chained
        cy.get("[type='submit']").contains("Not Unique Text");
    })

})