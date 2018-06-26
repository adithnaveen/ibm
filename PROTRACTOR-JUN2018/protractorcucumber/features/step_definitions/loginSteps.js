// Step definitions

var login = require("../pages/loginPage.js")

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Given('the username and password', function () {
        login.sendEmail("adith.naveen@gmail.com"); 

    });

    When('clicked on login', function () {
        login.sendPassword('1234');

    });

    Then('Take me to login page', function () {
        login.clickLogin();
    });
});
