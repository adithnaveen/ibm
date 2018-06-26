exports.config = {

	// setting to launch tests directly without selenium server
	 directConnect : false,
	// address of running selenium server
	seleniumAddress : 'http://localhost:4444/wd/hub',

	// setting time outs are in milli seconds 
	getPageTimeOut : 200000,
	allScriptsTimeout : 500000,

	// setting framework
	framework : 'custom',
	frameworkPath : require.resolve('protractor-cucumber-framework'),

	// setting protractor to ignore uncaught exceptions to take care by protractor-cucumber-framework
	ignoreUncaughtExceptions : true,

	// configuration parameters
	params: {
		testEnv: 'login'
    },
	
	// browser to launch tests
	capabilities : {
		browserName : 'chrome',
		'loggingPrefs': {
			'driver': 'WARNING',
			'server': 'WARNING',
			'browser': 'INFO'
		  }, 
		chromeOptions : {
			args : [ '--disable-extensions', ]
		}
	},

	// Specify Test Files
	//
	// Define which tests should execute
	specs : [ 
			//  'features/*.feature'
			'features/login.feature'
	       ],

	// this is not working because of ostmp cross check 
	//Define which tests should be excluded from execution.
	exclude : [
	         //   'features/search.feature'
			],

	// Set log level and enables colors for log output
	//  logLevel : 'all',
	coloredLogs : true,

	// arguments to cucumber.js
	cucumberOpts : {
		require : [ 
		            'features/support/env.js', 
		            'features/support/hooks.js',
		            'features/step_definitions/loginSteps.js'
		],
		tags : false,
		format : 'pretty',
		profile : false,
		'no-source' : true
	}
	
};
