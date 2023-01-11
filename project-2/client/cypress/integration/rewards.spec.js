/// <reference types="cypress" />

describe("Rewards Dashboard", () => {
    beforeEach(() => {
        cy.visit("/rewards")
    })

    it("Get all rewards", () => {
        cy.get("ul li.Rewards-cards-list").should('not.have.length', 0)
    })

    it("Get all rewards with a mock", () => {
        cy.intercept("GET", "http://localhost:4000/rewards", {
            fixture: "rewards"
        })
        cy.get("ul li.Rewards-cards-list").should('not.have.length', 0)
    })
})