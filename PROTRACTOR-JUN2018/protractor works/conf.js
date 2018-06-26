var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  // framework can be jasmine, mocha, custom 
  directConnect:true, 
  framework: 'jasmine2',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/LogingPOMTest.js'], 
    capabilities: {
      browserName: 'chrome', 
  //     marionette: false, 
      count:1
    }, 

    // this has options 
    onPrepare: function() {
      browser.driver.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(10000); 

      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots', 
          takeScreenshots: true,
          takeScreenshotsOnlyOnFailures: true
        })
      );
   }

    // multiCapabilities: [{
    //   browserName: 'firefox', 
    //   marionette: false,
    //   count:3
    // }, {
    //   browserName: 'chrome', 
    //   count:2
    // }]
  };