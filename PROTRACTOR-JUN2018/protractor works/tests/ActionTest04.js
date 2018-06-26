describe('Testing for Action classes', () => {
    
    beforeEach(() => {
        browser.waitForAngularEnabled(false); 
        browser.get("https://tasyah.com/");
    });

    it('selecting Indo-western sub menu items', () => {
        browser.driver.manage().window().maximize();

        var menuXpath ="//*[@id='menu_category_Menu_VIfWm2LT_439']/a/span/span"; 
        var subMenuXpath=".//*[@id='menu_category_Menu_VIfWm2LT_439']/ul/li[1]/a/span"; 
    
        var menuElement = element(by.xpath(menuXpath));
        var subMenuElement = element(by.xpath(subMenuXpath));

        // you can move to the element or x, y co-ordinates 
        browser.actions().mouseMove(menuElement).perform();

        browser.driver.sleep(2000); 

        subMenuElement.click();
    });

    it('write a test case to add the item in westren and validate the same', () => {
        // TODO
    });
});