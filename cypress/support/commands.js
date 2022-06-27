/// <reference types="Cypress" />

import { login, signUp, addToCart } from '../fixtures/utils';

Cypress.Commands.add(
    'signUpWithExistingUser',
    (username, password, buttonText) => {
        signUp(username, password, buttonText);
        cy.on('window:alert', (t) => {
            expect(t).to.contains('This user already exist.');
        });
        cy.xpath('//*[@id="signInModal"]/div/div/div[3]/button[1]').click({
            force: true,
        });
    }
);

Cypress.Commands.add('singUpSuccessful', (username, password, buttonText) => {
    cy.reload();
    signUp(username, password, buttonText);
    cy.on('window:alert', (t) => {
        expect(t).to.contains('Sign up successful.');
    });
});

Cypress.Commands.add('loginWithNewUser', (username, password, buttonText) => {
    login(username, password, buttonText);
    cy.wait(2000);
});

Cypress.Commands.add('logout', (logoutButtonText, loginButtonText) => {
    cy.get('[onclick="logOut()"]')
        .should('have.text', logoutButtonText)
        .click();
    cy.get('[data-target="#logInModal"]')
        .should('be.visible')
        .should('have.text', loginButtonText);
});

Cypress.Commands.add(
    'addToCart',
    (productText, addToCartButtonText, addProductMessageText) => {
        cy.get('[href="prod.html?idp_=1"][class]')
            .should('have.text', productText)
            .click();
        cy.get('h2[class=name]')
            .should('have.text', productText)
            .should('be.visible');
        cy.get('[onclick="addToCart(1)"]')
            .should('have.text', addToCartButtonText)
            .click();
        cy.wait(2000);
        cy.on('window:alert', (t) => {
            expect(t).to.contains(addProductMessageText);
        });
        cy.wait(2000);
        cy.get('[href="cart.html"]').click();
        cy.get('tr[class="success"]').should('be.visible');
        cy.get('[id="tbodyid"]').should('contain.text', productText);
    }
);

Cypress.Commands.add('deleteFromCart', (productText) => {
    cy.get('[onclick^="deleteItem"]').click();
    cy.get('[id="tbodyid"]').should('not.contain', productText);
    cy.get('[class="nav-item active"]')
        .click()
        .should('be.visible', '[class="list-group-item"]');
});

Cypress.Commands.add('deleteFromCart', (productText) => {
    cy.get('[onclick^="deleteItem"]').click();
    cy.get('[id="tbodyid"]').should('not.contain', productText);
    cy.get('[class="nav-item active"]')
        .click()
        .should('be.visible', '[class="list-group-item"]');
});

Cypress.Commands.add(
    'placeOrder',
    (
        productText,
        addToCartButtonText,
        addProductMessageText,
        placeOrderButtonText,
        price,
        newUser,
        contry,
        city,
        creditCard,
        month,
        year
    ) => {
        cy.addToCart(productText, addToCartButtonText, addProductMessageText);
        cy.get('[data-target="#orderModal"]')
            .click()
            .should('have.text', placeOrderButtonText);
        cy.get('[id="orderModalLabel"]').should('be.visible');
        cy.get('[id="totalm"]').should('contain.text', price);
        cy.wait(2000);
        cy.get('[id="name"]').type(newUser);
        cy.get('[id="country"]').type(contry);
        cy.get('[id="city"]').type(city);
        cy.get('[id="card"]').type(creditCard);
        cy.get('[id="month"]').type(month);
        cy.get('[id="year"]').type(year);
        cy.get('[onclick="purchaseOrder()"]').click();
        cy.get('[class="lead text-muted "]').should('contain.text', price);
        cy.get('[class="confirm btn btn-lg btn-primary"]').click();
    }
);
