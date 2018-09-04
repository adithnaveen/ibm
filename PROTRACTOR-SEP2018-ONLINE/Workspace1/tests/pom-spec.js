var loginpage = require('../pages/LoginPage')

describe('Work flow for login app', () => {
    
    beforeEach(() => {
        loginpage.getURL();
    });

    it('login and validate credentials ', () => {
        loginpage.clickLoginLink(); 
        loginpage.sendEmail("adith.naveen@gmail.com"); 
        loginpage.sendPassword("1234"); 
        loginpage.clickLoginBtn(); 

        var existingName = loginpage.getByFieldName("name"); 
        var newName = "Nina"; 
        var city="Reston"; 
        var state = "Virginia"; 

        loginpage.sendName(newName); 
        loginpage.sendCity(city); 
        loginpage.sendState(state); 
        loginpage.clickUpdateBtn();

        // var updatedName = loginpage.getByFieldName("name"); 
        var updatedName = loginpage.getField("name", "name"); 
        var updatedCity = loginpage.getField("name", "city"); 
        var updatedState = loginpage.getField("name", "state"); 
        expect(newName).toEqual(updatedName); 
        expect(city).toEqual(updatedCity); 
        expect(state).toEqual(updatedState); 
    });

});