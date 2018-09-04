// login, enter the details, validate with web application 


describe('Login and update with web application', () => {
    beforeAll(function() {
        console.log("hey i'm in Before All ")
    
      });

      afterAll(function(){
          console.log("hey i'm in after all"); 
      })

    beforeEach(() => {    
        browser.waitForAngularEnabled(false); 
        browser.get('http://probits.in/loginapp/');
        browser.driver.manage().window().maximize(); 
    });

    afterEach(() => {
        browser.sleep(2000); 
    });



     it('validate credentials and user details ', () => {
         // click on login link 
        var loginXpath ="//*[@id='bs-example-navbar-collapse-1']/ul/li[2]/a"; 
        element(by.xpath(loginXpath)).click();
        browser.sleep(1000);

         // enter user name, password, click on submit 
        element(by.name('email')).clear(); 
        element(by.name('email')).sendKeys('adith.naveen@gmail.com'); 

        element(by.name('pass')).clear(); 
        element(by.name('pass')).sendKeys('1234'); 
        browser.sleep(1000);
        
        element(by.name('login')).click(); 

         // we have to take the current username store it in a variable 
         // send a new name and click on update 

         var currentName = element(by.name('name')).
                            getAttribute('value').
                            then(function(name){
                 return name; 
         })

         
         var newName = "Shashwatha Ray1"; 
         element(by.name('name')).clear();
         element(by.name('name')).sendKeys(newName); 

         
         element(by.name('update')).click(); 

         // after update assert, and check the name sent and the server 
         // names are same 

         var updatedName = element(by.name('name')).
                getAttribute('value').
                then(function(name){
                return name; 
        })

        expect(newName).toEqual("Naveen"); 
      //   expect(currentName).not.toEqual(updatedName); 

      // Please try with state and city 
     });
});