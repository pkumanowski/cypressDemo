/// <reference types="Cypress" />
Cypress.config().waitForAnimations = true;

import { parametersLoginData } from '../fixtures/parameters';

describe('page login test', () => {
    it('should open login page', () => {
        cy.visit('/');
    });
    it('should say that the user already exists', () => {
        cy.signUpWithExistingUser(
            parametersLoginData.existingLogin,
            parametersLoginData.existingPassword,
            parametersLoginData.registerButtonText
        );
    });
    it('should say that sign up was successful', () => {
        cy.singUpSuccessful(
            parametersLoginData.newUser,
            parametersLoginData.newPassword,
            parametersLoginData.registerButtonText
        );
    });
    it('should log in as a valid user', () => {
        cy.loginWithNewUser(
            parametersLoginData.newUser,
            parametersLoginData.newPassword,
            parametersLoginData.loginButtonText
        );
    });
    it('should log out from app', () => {
        cy.logout(
            parametersLoginData.logoutButtonText,
            parametersLoginData.loginButtonText
        );
    });
});
