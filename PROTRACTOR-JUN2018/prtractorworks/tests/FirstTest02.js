describe("Testing entering into an input box ", function(){

    // beforeEach(() => {
    //     browser.get("https://angularjs.org/");
    //     browser.driver.manage().window().maximize();
    // });
    
    xit("executing input box text", function(){

        browser.executeScript('window.scrollTo(0,250);').then(
            function(){
                console.log("Scrolling 250 px ");
            }
        )
        element(by.model("yourName")).sendKeys("Asha"); 
        browser.driver.sleep(2000); 

        // here the text as as variable will be injected by protractor as a 
        // promise 
        var retVal = element(by.binding("yourName")).getText().then(function(text){
            console.log("value got from promise " + text)
            return text;
        })
        expect(retVal).toEqual("Hello Asha"); 
    })

    it('Enter details of the Employee for login and validate', () => {
        browser.get("http://naveenks.com/angularjs/FormValidate.html"); 

        element(by.model('firstName')).clear(); 
        element(by.model('firstName')).sendKeys("Srikanth"); 

        element(by.model('lastName')).clear(); 
        element(by.model('lastName')).sendKeys("secret@123"); 

        element(by.model('email')).clear();
        element(by.model('email')).sendKeys("srikanth@ibm.com");

        element(by.id('submitBtn')).click();
        browser.driver.sleep(2000); 

        // i leave with some todo's 
        // to click on alert and check the word called form submitted on the page 
        
    });


});