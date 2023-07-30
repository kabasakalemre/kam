const loginPage = require("../pages/loginPage");
const navigationBar = require("../pages/navigationBar");
const validCredentials = Cypress.env('credentials').valid;
const invalidCredentialsList = Cypress.env('credentials').invalid;

describe('Login Tests', () => {

    beforeEach(() => {
        loginPage.visit();
        loginPage.clickGoToLoginButton();
    });

    context('Login with valid credentials', () => {
        it('should login successfully', () => {
           loginPage.fillLoginForm(validCredentials.username, validCredentials.password);
           loginPage.clickLoginButton();
        });
    });

    context('Login with invalid credentials', () => {
        Cypress._.each(invalidCredentialsList, (invalidCredentials, index) => {
            it(`should not login with invalid credentials ${index}`, () => {
                loginPage.fillLoginForm(invalidCredentials.username, invalidCredentials.password);
                loginPage.clickLoginButton();
                loginPage.checkErrorMessage(invalidCredentials.errorMessage);
            });
        });
    });
});
