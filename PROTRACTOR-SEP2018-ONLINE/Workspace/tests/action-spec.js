// https://www.ibm.com/in-en/ 


describe('automating action even on ibm site', () => {
    
    beforeEach(() => {
        browser.waitForAngularEnabled(false); 
        browser.manage().timeouts().implicitlyWait(50000);
        jasmine.DEFAULT_TIMEOUT_INTERVAL=60000;
        browser.get('https://www.ibm.com/in-en/');
        browser.driver.manage().window().maximize(); 
    });


    afterEach(() => {
        browser.sleep(1000); 
    });

    it('click on ibm cloud with menu option', () => {
        var menuPath="mhitem-mms0"; 
        var subMenuPath=".//*[@id='mms0']/div[1]/ul/li[5]/a"; 
        var clickItemPath =".//*[@id='mms0-mp3']/div/div[1]/ul/li[1]/a"; 

        var menuElement = element(by.id(menuPath)); 
        browser.actions().mouseMove(menuElement).perform(); 
        browser.sleep(2000); 

        var subMenuElement = element(by.xpath(subMenuPath));
        browser.actions().mouseMove(subMenuElement).perform(); 
        browser.sleep(2000); 

        element(by.xpath(clickItemPath)).click();

    });
});