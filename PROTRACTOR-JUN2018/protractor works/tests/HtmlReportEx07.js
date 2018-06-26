describe('Application to Test login and capture screeen shot', () => {
    

    
    it('Enter details of the Employee for login and validate and take screen shot', () => {

        var expectedMessage ="Form Submitted";
        browser.get("http://naveenks.com/angularjs/FormValidate.html"); 

        element(by.model('firstName')).clear(); 
        element(by.model('firstName')).sendKeys("Srikanth"); 

        element(by.model('lastName')).clear(); 
        element(by.model('lastName')).sendKeys("secret@123"); 

        element(by.model('email')).clear();
        element(by.model('email')).sendKeys("srikanth@ibm.com");

        element(by.id('submitBtn')).click();
     
        browser.wait(function(){
            return browser.switchTo().alert().then(
                function(alert){
                    // when ever expect is done screen shot is captured 
                    expect(alert.getText()).toEqual(expectedMessage);
                    alert.accept();
                    return true;
                }, 
                function(){return false;}
            ); 
        })
        
    });
});