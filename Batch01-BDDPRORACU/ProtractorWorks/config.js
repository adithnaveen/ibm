exports.config = {
    // directConnect :true, 
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/LoginPOM.js'], 
    // either we can have jasmine, jasmine2, mocha 
    framework: 'jasmine',
  // we can specify the custom browser 
    capabilities: {
      browserName: 'chrome'
    }

    // we can also specify multiple browsers 

    // multiCapabilities: [{
    //   browserName: 'firefox', 
    //  //  version:'ANY'
    // }, {
    //   browserName: 'chrome'
    // }]
  };