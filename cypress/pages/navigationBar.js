class navigationBar {
    elements = {
        homeButton: () => cy.contains('Home'),
        usersAuthorizationButton: () => cy.contains('Users & Authorization'),
        organizationsButton: () => cy.contains('.ant-menu-item-only-child', 'Organizations'),
        rolesButton: () => cy.contains('.ant-menu-item-only-child', 'Roles'),
        usersButton: () => cy.contains('.ant-menu-item-only-child', 'Users'),
        advertisementButton: () => cy.contains('Advertisement'),
        profileButton: () => cy.get('.userButton-0-2-22'),
        userName: () => cy.contains('Test Admin'),
        changeLanguageButton: () => cy.contains('Language'),
        switchOrganizationButton: () => cy.contains('Switch Organization'),
        logoutButton: () => cy.get('.anticon-logout')
    }

    getActiveNavigationButton() {
       return cy.get('.ant-menu-item-active')
    }


}

module.exports = new navigationBar();