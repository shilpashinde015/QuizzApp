var data=require('C:/Users/shilp/protractorworkspace/BankingApp/src/utility/data.json')
var Home=require('C:/Users/shilp/protractorworkspace/BankingApp/src/BankingApppages/HomePage.js')
//var manager = require('C:/Users/shilp/protractorworkspace/BankingApp/src/BankingApppages/managerPage.js')

describe('Multiform e2e automation', function() {
	it('e2e flow', function() {
		
		browser.get(data.url);
		//var customer_login=Home.clickNext_customer();
		//var manager_login = Home.clickNext_manager();
		
		browser.sleep(4000);
	});
});