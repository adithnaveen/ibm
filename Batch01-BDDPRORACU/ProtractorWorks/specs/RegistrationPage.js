// program to show working of non-angular web application 
// multiple test cases can be written 

describe('Testing on Registration for ', () => {

    // will work only once 
    beforeAll(()=>{
        browser.waitForAngularEnabled(false);
    })
    
    // by default protractor will consider only angular pages 
    // to make protractor know it is non-angular 
    beforeEach(() => {
        browser.get("http://naveenks.com/web/RegForm.html"); 
    });

    it('To Send email password and confirm passwor click on submit ', () => {
        element(by.id('inputEmail')).clear(); 
        element(by.id('inputEmail')).sendKeys("scott@gmail.com"); 

        element(by.id('inputPassword')).clear();
        element(by.id('inputPassword')).sendKeys("secret@123");
        
        element(by.id('confirmPassword')).clear();
        element(by.id('confirmPassword')).sendKeys("secret@123");
        
        browser.driver.sleep(2000); 

        // both are same 
        element(by.id('monthOfBirth')).element(by.css("[value='nov']")).click();

        browser.driver.sleep(2000); 

        element(by.id('monthOfBirth')).$("[value='apr']").click();
        browser.driver.sleep(2000); 
    });


    xit('To get the name  of the months from reg page ', () => {
        var locator = "monthOfBirth"; 
        browser.driver.manage().window().maximize(); 

        expect(browser.getTitle()).toContain("Registration");

        element.all(by.css("#monthOfBirth option")).then(function(items){
            console.log(items.length);
            console.log("**** All Elements Text ******")
            for(var i=1; i<items.length; i++){
                // <option value="feb">February</option> -> object 

                items[i].getText().then(function(value){
                    console.log("value got " + value);
                })
            }
        });
    });






    
    xit('To get the   value of the months from reg page ', () => {
        
        var locator = "monthOfBirth"; 
        browser.driver.manage().window().maximize(); 

        // to test (excet)

        expect(browser.getTitle()).toContain("Registration");

        element.all(by.css("#monthOfBirth option")).then(function(items){
            console.log(items.length);
            console.log("**** All Elements Value ******")
            for(var i=1; i<items.length; i++){
                // <option value="feb">February</option> -> object 
               
                items[i].getAttribute("value").then(function(value){
                    console.log("value got " + value);
                })
                
            }
        });

    });

});