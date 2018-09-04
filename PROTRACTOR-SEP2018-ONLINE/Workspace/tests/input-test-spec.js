describe('Test entering input box ', () => {
    it('executing input box on angular js site ', () => {
        
        browser.get('https://angularjs.org/');

        var value = "IBM"; 

        element(by.model('yourName')).clear(); 
        element(by.model('yourName')).sendKeys(value);  

        browser.driver.sleep(2000);

        // Hello IBM!
        var retVal = element(by.binding('yourName')).getText().then(function(text){
            console.log("Ret value is " + text); 
            return text; 
        })

        expect(retVal).toEqual("Hello "+value+"!"); 

    });
});