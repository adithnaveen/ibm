describe('working with before and after', () => {
    
    beforeEach(() => {
        console.log("in Before Each"); 
        browser.get("https://angularjs.org/"); 
        browser.manage().timeouts().implicitlyWait(50000);
        jasmine.DEFAULT_TIMEOUT_INTERVAL=60000;

        browser.driver.manage().window().maximize(); 

    });

    afterEach(() => {
        console.log("in After each")
        browser.driver.sleep(1500);

    });

    it('Testcase 1', () => {
            // in the page we want to put data to this text box 
        // todoList.todoText
        var sendText = "Testing in IBM"; 

        element(by.model('todoList.todoText')).clear(); 
        element(by.model('todoList.todoText')).sendKeys(sendText); 

        element(by.css('[value="add"]')).click();
        browser.driver.sleep(1500);
        var todoList=element.all(by.repeater('todo in todoList.todos'));
      
        // because already 2 entries will be kept by angular 
        expect(todoList.count()).toEqual(3);
        browser.driver.sleep(1500);
        // to check the last entry is the value which we have entered 
         expect(todoList.get(2).getText()).toEqual(sendText);  

    });

    it('Testcase 2', () => {
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

