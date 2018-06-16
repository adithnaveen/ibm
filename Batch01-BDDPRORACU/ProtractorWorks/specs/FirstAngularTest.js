describe('Testing input text box in angularjs', () => {
    
    var name; 
    beforeEach(() => {
        browser.get('https://angularjs.org/');
        // this can even be taken from excel or json 
        name = "Nikhil";
    });
    it('should validate the given name with model', () => {
        // open the browser 
        // identify the element 

        element(by.model('yourName')).clear();
        element(by.model('yourName')).sendKeys(name);

        // first get the text which is show on the screen 
        var retValue = element(by.binding('yourName')).getText().then(function(retText){
            // this is called promise 
            return retText; 
        });

        // if you put console.log here they work async 
        // console.log(retValue);
        // browser.driver.sleep(2000); 
        expect(retValue).toEqual("Hello " + name +"!");

        console.log("Hiiii");
        // close 
        // there is not close in protractor 
    });
});