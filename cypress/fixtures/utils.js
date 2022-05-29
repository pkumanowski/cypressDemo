/// <reference types="Cypress" />

export const signUp = (username, password, buttonText) => {
    cy.get('[data-target="#signInModal"]').click();
    cy.wait(2000);
    cy.get('[id="sign-username"]').type(username);
    cy.get('[id="sign-password"]').type(password);
    cy.get('[onclick="register()"]').should('have.text', buttonText).click();
};

export const login = (username, password, buttonText) => {
    cy.get('[data-target="#logInModal"]').click();
    cy.get('[id="logInModalLabel"]').should('have.text', 'Log in');
    cy.wait(2000);
    cy.get('[id="loginusername"]').type(username);
    cy.get('[id="loginpassword"]').type(password);
    cy.get('[onclick="logIn()"]').should('have.text', buttonText).click();
    cy.get('[id="nameofuser"]').should('have.text', `Welcome ${username}`);
};
