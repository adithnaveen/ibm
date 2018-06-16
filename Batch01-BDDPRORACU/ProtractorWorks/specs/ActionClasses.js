describe("To show working of Action classes", () => {
    
    
    beforeAll(()=>{
        browser.waitForAngularEnabled(false);
    })
   
    beforeEach(() => {
        browser.get("https://tasyah.com/"); 
    });


    it("Select indo westrean, as sub element" , () => {
        browser.driver.manage().window().maximize(); 
        var menuItem="//*[@id='menu_category_Menu_VIfWm2LT_439']/a/span/span"; 
        var subMenuItem ="/html/body/div[4]/header/div/div/div[2]/div/nav/ul/li[1]/ul/li[1]/a/span";
        
        // hover on menu item 
        menuElement = element(by.xpath(menuItem));
        browser.actions().mouseMove(menuElement).perform();
        browser.driver.sleep(2000);

        // then click on submenu 
        element(by.xpath(subMenuItem)).click();

        
    });
});