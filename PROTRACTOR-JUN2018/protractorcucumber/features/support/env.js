// Environment global variables declaration
os = require('os'); 

var configure = function () {
    this.setDefaultTimeout(240 * 1000);
};
os.tmpDir = os.tmpdir();

const util = require('util');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var EC = protractor.ExpectedConditions;
var config;
chai.use(chaiAsPromised);
global.expect = chai.expect;
global.util = util;
global.EC = EC;
global.config = config;
module.exports = configure;