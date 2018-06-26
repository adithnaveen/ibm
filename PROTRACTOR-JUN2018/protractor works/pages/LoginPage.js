// all elements shall be recorded here 
var loginPage = function(){

    this.open = function(){
        browser.waitForAngularEnabled(false); 
        // this can still be got from json or excel 
        browser.get("http://probits.in/loginapp/login.php"); 
    }

    this.sendEmail = function(email){
        element(by.name('email')).clear(); 
        element(by.name('email')).sendKeys(email); 
    }

    this.sendPassword = function(pass){
        element(by.name('pass')).clear(); 
        element(by.name('pass')).sendKeys(pass); 
    }
    
    this.clickLogin = function(){
        element(by.name('login')).click(); 
    }

    this.sendUserName = function(username){
        element(by.name('name')).clear();
        element(by.name('name')).sendKeys(username);
    }

    this.sendDOB = function(dob){
        element(by.name('dob')).clear();
        element(by.name('dob')).sendKeys(dob);
    }

    this.sendState = function(state){
        element(by.name('state')).clear();
        element(by.name('state')).sendKeys(state); 
    }

    this.sendCity = function(city){
        element(by.name('city')).clear();
        element(by.name('city')).sendKeys(city);
    }

    this.getCurrentState = function(){
        return  element(by.name('state'))
            .getAttribute('value').then(function(text){
                return text.trim(); 
            }); 
    }

    this.getCurrentCity  = function(){
        return element(by.name('city'))
            .getAttribute('value').then(function(text){
                return text.trim(); 
            })
    }

    this.clickUpdate = function(){
        element(by.name('update')).click();
    }
}

module.exports = new loginPage();