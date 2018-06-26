var loginUser = require("../data/login"); 


describe('Application to Test login and capture screeen shot and read data from json file', () => {
  
    it('Read from json, capture screenshot', () => {

        browser.waitForAngularEnabled(false); 
        browser.get(loginUser.loginUrl); 

        element(by.name(loginUser.locators.loginpage.username)).clear(); 
        element(by.name(loginUser.locators.loginpage.username))
            .sendKeys(loginUser.userdetails.username); 

        browser.driver.sleep(3000);

        element(by.name(loginUser.locators.loginpage.password)).clear(); 
        element(by.name(loginUser.locators.loginpage.password))
            .sendKeys(loginUser.userdetails.password); 
        
        browser.driver.sleep(3000);
            
        element(by.name(loginUser.locators.loginpage.loginbtn)).click(); 

        browser.driver.sleep(3000);
            
    });
});