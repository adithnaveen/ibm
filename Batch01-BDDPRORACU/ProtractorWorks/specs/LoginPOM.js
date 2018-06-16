var loginPage = require("../pages/LoginPage");
var user = require("../data/user")

describe('To show working of POM', () => {

    beforeEach(() => {
        loginPage.get();    
    });

    it('Login with Valid Credentials', () => {
        loginPage.sendEmail(user.userdetails.email);
        loginPage.sendPassword(user.userdetails.password);
        loginPage.clickLogin();
        loginPage.sleep(2000);

    });

});