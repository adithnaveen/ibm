// to test a non-angular application this shall have two test cases 
// 1.send values 
// 2. to get all the element values or display text from the drop down box 

describe('Testing Registration form', () => {
    
    beforeEach(() => {
        // we have to specify it is non angular page 
        // by default its true 
        browser.waitForAngularEnabled(false); 
        browser.get('http://naveenks.com/web/RegForm.html');
    });


    xit('Send email and passwords.. ', () => {
        element(by.id('inputEmail')).clear();
        element(by.id('inputEmail')).sendKeys("srikanth@gmail.com"); 

        element(by.id('inputPassword')).sendKeys("secret!@#$"); 
        element(by.id('confirmPassword')).sendKeys("secret!@#$"); 

        // this is incomplete 
    });


    it('Get all the months of date of birth and select each', () => {
        browser.driver.manage().window().maximize(); 

        // get all the dropdown elements of monthOfBirth - text 

        element.all(by.css('#monthOfBirth option')).then(function(items){

            console.log("*********** Month Text ***************"); 

            console.log("Number of Elements got is " + items.length); 

            for(i=1; i < items.length; i++){
                items[i].getText().then(function(monthText){
                    console.log("Month : " + monthText);
                })
            }

        }); 

        /////////////////////////////////////////////////////////////


          // get all the dropdown elements of monthOfBirth - value  

          element.all(by.css('#monthOfBirth option')).then(function(items){

            console.log("*********** Month value ***************"); 

            console.log("Number of Elements got is " + items.length); 

            for(i=1; i < items.length; i++){
                items[i].getAttribute('value').then(function(monthText){
                    console.log("Month : " + monthText);
                })
            }
        }); 

        // to send the value to web application 

        element(by.id('monthOfBirth')).element(by.css("[value='oct']")).click();
        
        browser.driver.sleep(3000);

        element(by.id('monthOfBirth')).element(by.css("[value='apr']")).click();
        browser.driver.sleep(3000);

        element(by.id('monthOfBirth')).$("[value='jan']").click();
        browser.driver.sleep(3000);


    });
});