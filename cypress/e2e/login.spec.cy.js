import Userdata from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage =  new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    genericComboBox: ".oxd-select-text--arrow",
    itemComboBox: ".oxd-select-dropdown > :nth-child(3)",
    submitButton: "[type='submit']"
  }

  const userData = {
    userSucess: {
      username: 'Admin',
      password: 'admin123'
    },
    userFail: {
      username: 'teste',
      password: 'teste'
    }
  }

  it.only('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type("FirstNameTest")
    cy.get(selectorsList.lastNameField).clear().type("LastNameTest")
    cy.get(selectorsList.genericField).eq(4).clear().type("Employee")
    cy.get(selectorsList.genericField).eq(5).clear().type("OtherIdTest")
    cy.get(selectorsList.genericField).eq(6).clear().type("DriversLicenseTest")
    cy.get(selectorsList.dateField).eq(0).clear().type("2025-02-20")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericComboBox).eq(0).click({ force: true })
    cy.get(selectorsList.itemComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click({ force: true })
    cy.get(selectorsList.itemComboBox).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')


   
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
