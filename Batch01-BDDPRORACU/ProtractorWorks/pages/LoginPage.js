// this file will hold the references of the page 
var loginPage = function(){
    this.get = function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://probits.in/loginapp/login.php");
        browser.driver.manage().window().maximize();
    }

    this.sendEmail = function(email){
        element(by.name('email')).clear(); 
        element(by.name('email')).sendKeys(email);
    }

    this.sendPassword = function(password){
        element(by.name('pass')).clear(); 
        element(by.name('pass')).sendKeys(password);
    }

    this.clickLogin = function(){
        element(by.name('login')).click();
    }

    this.sleep = function(milli){
        browser.driver.sleep(milli);
    }
}

module.exports =  new loginPage();