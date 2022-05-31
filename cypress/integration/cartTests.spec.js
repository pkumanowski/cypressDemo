/// <reference types="Cypress" />
Cypress.config().waitForAnimations = true;

import { parametersCartData } from '../fixtures/parameters';

describe('purchase cart tests', () => {
    it('should open landing page', () => {
        cy.visit('/');
    });
    it('should add item to cart', () => {
        cy.addToCart(
            parametersCartData.productText,
            parametersCartData.addToCartButtonText,
            parametersCartData.addProductMessageText
        );
    });
    it('should delete item from cart', () => {
        cy.deleteFromCart(parametersCartData.productText);
    });
    it('should place order', () => {
        cy.placeOrder(
            parametersCartData.productText,
            parametersCartData.addToCartButtonText,
            parametersCartData.addProductMessageText,
            parametersCartData.placeOrderButtonText,
            parametersCartData.price,
            parametersCartData.name,
            parametersCartData.country,
            parametersCartData.city,
            parametersCartData.creditCard,
            parametersCartData.month,
            parametersCartData.year
        );
    });
});
