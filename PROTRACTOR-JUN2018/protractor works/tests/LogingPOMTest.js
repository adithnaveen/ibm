var loginPage = require("../pages/LoginPage"); 
describe('testing for POM', () => {

    beforeEach(() => {
        loginPage.open();
    });

    it('to validate the given user with valid credentials', () => {
        loginPage.sendEmail("adith.naveen@gmail.com"); 
        loginPage.sendPassword("1234"); 
        loginPage.clickLogin();

        // we want to validate state
        expect(loginPage.getCurrentState()).toEqual("Andra1");
        
        // validate city 
        expect(loginPage.getCurrentCity()).toEqual("Hyderabad1");
    });
});