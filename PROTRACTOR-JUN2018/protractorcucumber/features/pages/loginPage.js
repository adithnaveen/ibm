// page class for login page 

var LoginPage = function(){
    this.clickLogin = function(){
        element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a')).click();
    }

    this.sendEmail = function(email){
        element(by.name('email')).clear();
        element(by.name('email')).sendKeys(email)
    }

    this.sendPassword = function(password){
        element(by.name('pass')).clear();
        element(by.name('pass')).sendKeys(password);
    }

    this.clickLogin = function(){
        element(by.name('login')).click();
    }
}

module.exports = new LoginPage();