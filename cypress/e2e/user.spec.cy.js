import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myinfoPage.js'

const Chance = require('chance')
const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage =  new MenuPage()
const myinfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    myinfoPage.fillPersonalDetails(chance.first(),chance.last())
    myinfoPage.fillEmployeeDetails('employee','otherID','DriversL','2025-02-26')
    myinfoPage.fillStatus()
    myinfoPage.saveForm()

  })
})
