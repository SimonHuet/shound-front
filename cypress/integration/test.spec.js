describe("Main tests", function() {
    it("Connect to main page", function() {
      cy.visit("http://localhost:8080/");
    });
  
    it("Chiffre d'affaire", function() {
      cy.visit("http://localhost:8080/");
  
      cy.contains("Chiffre d'affaire").click();
  
      cy.url().should("include", "#/ca");
    });
  
    it("Click list", function() {
      cy.visit("http://localhost:8080/");
  
      cy.get("td")
        .first()
        .click();
  
      cy.url().should("include", "#/orders/");
    });
  
    it("Click return button", function() {
      cy.visit("http://localhost:8080/");
  
      cy.get("td")
        .first()
        .click();
  
      cy.contains("Retour").click();
      cy.url().should('eq', "http://localhost:8080/#/");
    });
  });
