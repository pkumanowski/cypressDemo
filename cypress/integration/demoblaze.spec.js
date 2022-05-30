/// <reference types="Cypress" />
Cypress.config().waitForAnimations = true;

import { parametersSwagLabsPage } from '../fixtures/parameters';

describe('page login test', () => {
    it('should open login page', () => {
        cy.visit('/');
    });
    it('should say that the user already exists', () => {
        cy.signUpWithExistingUser(
            parametersSwagLabsPage.existingLogin,
            parametersSwagLabsPage.existingPassword,
            parametersSwagLabsPage.registerButtonText
        );
    });
    it('should say that sign up was successful', () => {
        cy.singUpWithNewUser(
            parametersSwagLabsPage.newUser,
            parametersSwagLabsPage.newPassword,
            parametersSwagLabsPage.registerButtonText
        );
    });
    it('it should log in as a valid user', () => {
        cy.loginWithNewUser(
            parametersSwagLabsPage.newUser,
            parametersSwagLabsPage.newPassword,
            parametersSwagLabsPage.loginButtonText
        );
    });
    it('it should log out from app', () => {
        cy.logout(
            parametersSwagLabsPage.logoutButtonText,
            parametersSwagLabsPage.loginButtonText
        );
    });
});
