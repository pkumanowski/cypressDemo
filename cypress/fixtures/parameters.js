import { faker } from '@faker-js/faker';

export const parametersSwagLabsPage = {
    existingLogin: 'admin',
    existingPassword: 'admin',
    registerButtonText: 'Sign up',
    loginButtonText: 'Log in',
    logoutButtonText: 'Log out',
    newUser: faker.name.findName(),
    newPassword: faker.random.word(),
};
