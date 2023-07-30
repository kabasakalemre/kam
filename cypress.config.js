const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xkzyc1',
  env: {
    credentials: {
        valid: {
            username: "test.admin@getir.com",
            password: "the-password"
        },
        invalid: [
          {
              username: "test.admin@getir.com",
              password: "1234567",
              errorMessage: "Wrong password. Try again or click Reset password to reset it."
          },
          {
              username: "testadmin@getir.com",
              password: "the-password",
              errorMessage: "Getir Business partner account was not found."
          },
          {
            username: "emre@getir.com",
            password: "53456346",
            errorMessage: "Getir Business partner account was not found."
          }
        ]
    }
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
