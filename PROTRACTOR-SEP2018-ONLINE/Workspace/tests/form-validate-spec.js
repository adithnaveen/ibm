describe('validation', () => {
    it('should enter the value and accep the alert', () => {
        browser.get('http://ohbreaks.com/angularforms/FormValidate.html');

        element(by.model('firstName')).clear(); 
        element(by.model('firstName')).sendKeys("Nina"); 

        element(by.model('lastName')).clear();
        element(by.model('lastName')).sendKeys("Samuel"); 

        element(by.model('email')).clear(); 
        element(by.model('email')).sendKeys("nina@yahoo.com"); 

        browser.sleep(1500); 
        element(by.id('submitBtn')).click(); 

        // wait for the browser to show the alert 
        // assert and accept 

        browser.wait(function(){
            return browser.switchTo().alert().then(function(alert){
                expect(alert.getText()).toEqual("Form Submitted");
                alert.accept();
                return true; 
            },
                function(){
                    return false; 
                } 
            );
        })
    });
});