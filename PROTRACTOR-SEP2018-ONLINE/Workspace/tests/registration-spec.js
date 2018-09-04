describe('Testing registration Form', () => {
    
    // this is not an angular page 
    beforeEach(() => {
        browser.waitForAngularEnabled(false); 
        browser.get('http://ohbreaks.com/webforms/RegForm.html');
        browser.driver.manage().window().maximize(); 
    });

    afterEach(() => {
        browser.driver.sleep(3000); 
    });

    xit('send email, password, confirm password', () => {
        element(by.id('inputEmail')).clear();
        element(by.id('inputEmail')).sendKeys("piyush@msn.com"); 

        element(by.id('inputPassword')).clear(); 
        element(by.id('inputPassword')).sendKeys("secret@123");

        element(by.id('confirmPassword')).clear(); 
        element(by.id('confirmPassword')).sendKeys("secret@123"); 

    });

    it('get all the months of the date of birth from select', () => {
        browser.driver.manage().window().maximize(); 

        expect(browser.getTitle()).toContain("Sample"); 

        // get the list of drop down elements, and the text of 
        // it, with promise 
        element.all(by.css('#monthOfBirth option')).then(function(items){
            console.log("--------------- Month Text ------------------")
            console.log("Number of Element " + items.length); 

            for(i=1; i<items.length; i++){
                items[i].getText().then(function(text){
                    console.log("Ret Month : " + text);
                })
            }
        })

        // to get elements with values 
        element.all(by.css('#monthOfBirth option')).then(function(items){
            console.log("--------- Month by Value -------------------- "); 
            for(i=0; i<items.length; i++){
                items[i].getAttribute("value").then(function(text){
                    console.log("Value of Month is " + text); 

                    element(by.id('monthOfBirth')).element
                        (by.css("[value='"+text+"']")).click();
                    browser.driver.sleep(1000);
                })
            }
        })
    });

});