var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
 directConnect: true,
seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  
 suites: {
		CustomerAccount: ['C:/Users/shilp/protractorworkspace/BankingApp/src/CustomerAccount/E2ECustomer.js'],
		ManagerAccount: ['C:/Users/shilp/protractorworkspace/BankingApp/src/ManagerAccount/E2EManager.js'],
	},
  //specs: ['C:/Users/shilp/protractorworkspace/BankingApp/src/ManagerAccount/E2EManager.js'],
 // specs: ['C:/Users/shilp/protractorworkspace/BankingApp/src/CustomerAccount/E2ECustomer.js'],
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/htmlReports',
           takeScreenshots: true,
          takeScreenShotsForSkippedSpecs: true,
          cssOverrideFile: 'css/style.css',
          takeScreenshotsOnlyOnFailures: true
        })
      );
   },
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
