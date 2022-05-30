/// <reference types="Cypress" />

import { login, signUp } from '../fixtures/utils';

Cypress.Commands.add(
    'signUpWithExistingUser',
    (username, password, buttonText) => {
        signUp(username, password, buttonText);
        cy.on('window:alert', (t) => {
            expect(t).to.contains('This user already exist.');
        });
        cy.xpath('//*[@id="signInModal"]/div/div/div[3]/button[1]').click();
    }
);

Cypress.Commands.add('singUpWithNewUser', (username, password, buttonText) => {
    cy.reload();
    signUp(username, password, buttonText);
    cy.on('window:alert', (t) => {
        expect(t).to.contains('Sign up successful.');
    });
});

Cypress.Commands.add('loginWithNewUser', (username, password, buttonText) => {
    login(username, password, buttonText);
});

Cypress.Commands.add('logout', (logoutButtonText, loginButtonText) => {
    cy.get('[onclick="logOut()"]')
        .should('have.text', logoutButtonText)
        .click();
    cy.get('[data-target="#logInModal"]')
        .should('be.visible')
        .should('have.text', loginButtonText);
});
