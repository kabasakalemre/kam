class LoginPage {
    elements = {
        usernameInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('.btn-login'),
        showPasswordButton: () => cy.get('#passwordIcon'),
        errorMessage: () => cy.get('.form-signin > p'),
        resetPasswordButton: () => cy.get('.txt-reset-password'),
        resetPasswordButtonTop: () => cy.get('.btn-set-password'),
        emailInput: () => cy.get('#email'),
        submitResetPasswordButton: () => cy.get('.btn-reset-password'),
        goToLoginButton: () => cy.get('.ant-btn')
    }

    visit() {
        cy.visit('vendor.develop.getirapi.com')
    }

    fillLoginForm(username, password) {
        this.elements.usernameInput().type(username)
        this.elements.passwordInput().type(password)
    }
    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }

    typePassword(password) {
        this.elements.passwordInput().type(password)
    }

    clickLoginButton() {
        this.elements.loginButton().click()
    }

    clickShowPasswordButton() {
        this.elements.showPasswordButton().click()
    }

    getErrorMessage() {
        return this.elements.errorMessage().invoke('text')
    }

    checkErrorMessage(message) {
        this.elements.errorMessage().should('be.visible').and('contain', message)
    }

    clickResetPasswordButton() {
        this.elements.resetPasswordButton().click()
    }

    clickResetPasswordButtonTop() {
        this.elements.resetPasswordButtonTop().click()
    }

    typeEmail(email) {
        this.elements.emailInput().type(email)
    }

    clickSubmitResetPasswordButton() {
        this.elements.submitResetPasswordButton().click()
    }

    clickGoToLoginButton() {
        this.elements.goToLoginButton().click()
    }
    

}

module.exports = new LoginPage();