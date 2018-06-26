// testing login with update 

describe('Login and update details on login applicatiom', () => {
    
    it('Login with valid credentials', () => {
        browser.waitForAngularEnabled(false); 
        browser.get("http://probits.in/loginapp/login.php"); 
        browser.driver.manage().window().maximize(); 

        element(by.name('email')).clear(); 
        element(by.name('email')).sendKeys("adith.naveen@gmail.com"); 

        element(by.name('pass')).clear(); 
        element(by.name('pass')).sendKeys("1234"); 

        element(by.name('login')).click(); 

        // if the credentials are validate then it should take us to 
        // home screen 

        // this value shall be given in excel 
        var lookBackName ="NavTest"; 

        // the value here will be got from the website 
        var existingName = element(by.name('name'))
            .getAttribute('value').then(function(text){
                console.log("Value got is " + text); 
                return text; 
            })

            expect(existingName).toEqual(lookBackName); 

            // now update existing details 
        
            var state = "Andra"; 
            var city ="Hyderabad"; 

            element(by.name('state')).clear(); 
            element(by.name('state')).sendKeys(state); 
            
            element(by.name('city')).clear(); 
            element(by.name('city')).sendKeys(city); 

            element(by.name('update')).click();

            // get the state and city from the web application 
            // after the update is done 

            var existingState = element(by.name('state'))
            .getAttribute('value').then(function(text){
                console.log("Sate Value got is " + text); 
                return text.trim(); 
            })

            var existingCity = element(by.name('city'))
            .getAttribute('value').then(function(text){
                console.log("city Value got is " + text); 
                return text.trim(); 
            })
            expect(existingState).toEqual(state); 
            expect(existingCity).toEqual(city);
    });
});