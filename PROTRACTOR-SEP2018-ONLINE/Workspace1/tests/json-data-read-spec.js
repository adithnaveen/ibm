// program to show working of reading the data from json file 
var loginuser = require('../jsondata/login')

describe('Testing application to pull data from json', () => {

    beforeEach(() => {
        browser.waitForAngularEnabled(false); 
        browser.get(loginuser.loginurl);
    });

    it('validate login credentials', () => {
        console.log("URL loaded is " +  loginuser.loginurl); 

        element(by.name(loginuser.locators.loginpage.username)).clear(); 
        element(by.name(loginuser.locators.loginpage.username))
            .sendKeys(loginuser.userdetails.username); 
        
        element(by.name(loginuser.locators.loginpage.password)).clear();
        element(by.name(loginuser.locators.loginpage.password)).
        sendKeys(loginuser.userdetails.password); 

        expect("hi").toEqual("hi"); 

        element(by.name(loginuser.locators.loginpage.loginbtn)).click();

    });
});