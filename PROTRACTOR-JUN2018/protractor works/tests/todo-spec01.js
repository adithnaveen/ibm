describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      // will open the browser with the web application 
      // specified 
      browser.get('https://angularjs.org');
  
      browser.driver.manage().window().maximize();

      element(by.model('todoList.todoText')).sendKeys('write first protractor test');
      element(by.css('[value="add"]')).click();
  
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write first protractor test');

      browser.driver.sleep(2000); 

      // You wrote your first test, cross it off the list
      todoList.get(2).element(by.css('input')).click();
      var completedAmount = element.all(by.css('.done-true'));
      expect(completedAmount.count()).toEqual(2);

      browser.driver.sleep(2000); 

    });
  });