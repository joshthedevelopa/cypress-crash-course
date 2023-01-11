/// <reference types="cypress" />


describe("habit dashboard", () => {

    beforeEach(() => {
        cy.visit("/habits")
    })

    it("should display modal when add button is clicked", () => {
        cy.contains("button", "Add").click()
        cy.contains("Add a new habit").should("be.visible")
    })

    it("should display habit card when new card is added", () => {
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Drink a cup of water")
        
        cy.contains("Save Changes").click()
        cy.contains("Drink a cup of water")
            .should("be.visible")
            .should("have.class", "HabitCard__habit-container")
    })

    it("should toggle icon when habit card is clicked", () => {
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Drink a cup of water")

        cy.contains("Save Changes").click()
        cy.get("[src='/static/media/close.e3380abb.svg']").should("be.visible")

        cy.contains("Drink a cup of water").click()
        cy.get("[src='/static/media/check.757e4c2f.svg']").should("be.visible")
    })


})