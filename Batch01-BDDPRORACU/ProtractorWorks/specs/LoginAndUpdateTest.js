// 1. program to show working of login and update user detail and 
// assert the same 

// 2. automate the given case with multiple value with excel file 

var Excel = require('exceljs');
var logger = require("../logsconfig/config");


describe('Test Login and update for Non Angular application', () => {
    beforeAll(()=>{
        browser.waitForAngularEnabled(false);
    })
    beforeEach(() => {
        // browser.get("http://probits.in/loginapp/login.php"); 
    });

    xit('Login and update for single user', () => {
        browser.driver.manage().window().maximize(); 

        // assume that we are getting from excel sheet 
        var expectedUserName="USER1";
        var newUser = "Naveen IBM"; 

        // locate email  and send values 
        element(by.name('email')).sendKeys("user@gmail.com"); 

        // locate password  and send values 
        element(by.name('pass')).sendKeys("1234");

        // click submit 
        element(by.name('login')).click();
        
        // after login 
        // find the element -> name
        var actualUserName = element(by.name('name')).getAttribute("value")
        .then(function(text){
            console.log("Got from the Text Filed after login : "+ text); 
            return text.toUpperCase();
        })

        expect(expectedUserName).toBe(actualUserName);

        element(by.name('name')).clear();
        element(by.name('name')).sendKeys(newUser); 
        element(by.name('update')).click();

        var actualUserNamePostUpdate = element(by.name('name')).getAttribute("value")
        .then(function(text){
            console.log("Got from the Text Filed after login(POST UPDATE) : "+ text); 
            return text;
        })

        expect(newUser).toBe(actualUserNamePostUpdate);
    });


    it('Get Data From Excel', () => {
        var workbook = new Excel.Workbook();

        // you can set the properties 
        workbook.creator = 'Naveen';
        workbook.lastModifiedBy = 'Sowbhagya';

        workbook.xlsx.readFile("Sample.xlsx")
        .then(function() {
            var workSheet = workbook.getWorksheet("One");

            workSheet.eachRow(function(row, rowNumber){
                logger.info("Row Number " + rowNumber +", User Name :" + 
                row.getCell(1) +", Password : " + row.getCell(2) );
            })

        });

    });



});