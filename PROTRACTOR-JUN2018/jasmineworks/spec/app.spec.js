// the test case file or spec 

var Add = require("../app"); 

describe("Add functionality", function(){
    it("testing the valid case ", function(){
        expect(Add(10, 20)).toEqual(30);
        console.log("Test Case invoked... valid case  ")
    })

    it("testing the invalid case ", function(){
        expect(Add(10,20)).toEqual(31);
        console.log("Test Case invoked.. invalid case... ")
    })
})