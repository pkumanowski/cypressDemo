/// <reference types="Cypress" />
Cypress.config().waitForAnimations = true;

import { parametersCartData } from '../fixtures/parameters';
import { parametersLoginData } from '../fixtures/parameters';

describe('asdasd', () => {
    it('should open landing page', () => {
        cy.visit('/');

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
    it('should add item to cart', () => {
        cy.addToCart(
            parametersCartData.productText,
            parametersCartData.addToCartButtonText,
            parametersCartData.addProductMessageText,
            parametersLoginData.newUser
        );
    });
    it('should delete item from cart', () => {
        cy.deleteFromCart(parametersCartData.productText);
    });
});
