import { faker } from '@faker-js/faker';

export const parametersLoginData = {
    existingLogin: 'admin',
    existingPassword: 'admin',
    registerButtonText: 'Sign up',
    loginButtonText: 'Log in',
    logoutButtonText: 'Log out',
    newUser: faker.name.findName(),
    newPassword: faker.random.word(),
    productText: 'Samsung galaxy s6',
    addToCartButtonText: 'Add to cart',
    addProductMessageText: 'Product added',
};

export const parametersCartData = {
    productText: 'Samsung galaxy s6',
    addToCartButtonText: 'Add to cart',
    addProductMessageText: 'Product added',
    placeOrderButtonText: 'Place Order',
    price: '360',
    name: faker.name.findName(),
    country: 'Poland',
    city: 'Warsaw',
    creditCard: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: '2022',
};
