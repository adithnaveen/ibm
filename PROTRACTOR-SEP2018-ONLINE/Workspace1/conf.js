var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  // mentioning jasmine is optional 
    framework: 'jasmine2',
    // directConnect: true, 
     seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/pom-spec.js'],
    capabilities: {
      browserName: 'chrome', 
      // marionette: false, 
      count:1
    }, 

    onPrepare: function() {
      browser.manage().window().maximize(); 
      browser.manage().timeouts().implicitlyWait(20000); 
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'reports', 
          screenshotsFolder: 'images', 
          takeScreenshots: true,
          // takeScreenshotsOnlyOnFailures: true, 
          fileNamePrefix: 'IBM', 
          cleanDestination: true, 
          fileNameDateSuffix: true
        })
      );
    }



    // multiCapabilities: [{
    //   browserName: 'firefox', 
    //   marionette: false, 
    //   count: 2
    // }, {
    //   browserName: 'chrome', 
    //   count : 2
    // }]
  }