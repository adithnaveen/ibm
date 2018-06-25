exports.config = {


  // framework can be jasmine, mocha, custom 
  framework: 'jasmine',

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/FirstTest02.js'], 
    // capabilities: {
    //   browserName: 'chrome'
    // }

    multiCapabilities: [{
      browserName: 'firefox'
    }, {
      browserName: 'chrome'
    }]
  };