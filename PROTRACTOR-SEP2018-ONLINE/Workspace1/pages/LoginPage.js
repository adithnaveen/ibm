var loginlocators = require("../jsondata/login")
var loginPage = function(){

    this.getURL= function(){
        browser.waitForAngularEnabled(false); 
        browser.get('http://probits.in/loginapp/');
        browser.driver.manage().window().maximize();
    }

    this.clickLoginLink = function(){
        element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a')).click();
    }

    this.sendEmail = function(email){
        locator=loginlocators.locators.loginpage.username; 
        element(by.name(locator)).clear();
        element(by.name(locator)).sendKeys(email); 
    }

    this.sendPassword = function(password){
        element(by.name('pass')).clear(); 
        element(by.name('pass')).sendKeys(password); 
    }

    this.clickLoginBtn = function(){
        element(by.name('login')).click();
    }

    this.sendName = function(name){
        element(by.name('name')).clear(); 
        element(by.name('name')).sendKeys(name); 
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
    
    this.clickUpdateBtn = function(){
        element(by.name('update')).click();
    }


    //  for promises 
    this.getByFieldName = function(fieldName){
        console.log("Field Name got is " + fieldName +" and returning Value");
        return  element(by.name(fieldName)).
                getAttribute("value").
                then(function(text){
                return text; 
            })
    }


    this.getField = function(type, locator){
        console.log("type " + type +", locator " + locator); 
        if(type=="id"){
            return element(by.id(locator)).
                getAttribute('value').
                then(function(text){
                    return text; 
                })

        }else if(type =="name"){
            console.log("in name for locator " +locator ); 
            return element(by.name(locator)). 
                getAttribute('value').
                then(function(text){
                    console.log("value got is " + text); 
                    return text.trim();
                })
        }else if(type="ngmodel"){

        }
    }


}

module.exports = new loginPage();

