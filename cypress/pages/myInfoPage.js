class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            genericComboBox: ".oxd-select-text--arrow",
            itemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            submitButton: "[type='submit']"

        }

        return selectors
    }

    fillPersonalDetails(firstName,lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId,otherIdTest,driversLicense,driversLicenseDate){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherIdTest)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true })
        cy.get(this.selectorsList().itemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true })
        cy.get(this.selectorsList().itemComboBox).click()
    }
}

export default MyInfoPage
