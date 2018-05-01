describe('Multiform e2e automation for ManagerLogin', function() {
	it('e2e flow', function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		element(by.partialButtonText('Bank Manager Login')).click();
		browser.sleep(4000);
		
		
	});
});
describe('Multiform e2e automation for ManagerLogin', function() {
		 it('Manager Login', function() {
			var add_cust =  element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[1]'))
			  expect(add_cust.getText()).toBe('Add Customer');
			   
			  });	
		 
		 it('Add Customer', function() {
			 var add_cust =  element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[1]')) 
			 add_cust.click();
			 element(by.model('fName')).sendKeys('tech');
			 element(by.model('lName')).sendKeys('arch');
			 element(by.model('postCd')).sendKeys('30000');
			 element(by.className('btn btn-default')).click();
			 
			 browser.wait(protractor.ExpectedConditions.alertIsPresent(), 3000);
			 var alertDialog = browser.switchTo().alert();
			 expect(alertDialog.getText()).toEqual("Customer added successfully with customer id :6");
			 browser.switchTo().alert().accept();
			 browser.sleep(4000);
		 });
		 
		 it('open account_dollar', function() {
			 var openaccount =   element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[2]')) 
			 openaccount.click();
			 element(by.cssContainingText('option', 'Harry Potter')).click();
			 element(by.cssContainingText('option', 'Dollar')).click();
			 element(by.xpath('html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button')).click();
			  browser.wait(protractor.ExpectedConditions.alertIsPresent(), 3000);
			//  browser.switchTo().alert().accept();
			 var alertDialog = browser.switchTo().alert();
			 expect(alertDialog.getText()).toEqual("Account created successfully with account Number :1016");
			 alertDialog.accept();	
		 });
		 
		 it('open account_Pound', function() {
			 var openaccount =   element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[2]')) 
			 openaccount.click();
			 element(by.cssContainingText('option', 'Harry Potter')).click();
			 element(by.cssContainingText('option', 'Pound')).click();
			 element(by.xpath('html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button')).click();
				//browser.sleep(5000);
			 browser.wait(protractor.ExpectedConditions.alertIsPresent(), 3000);
			  //browser.switchTo().alert().accept();
			 var alertDialog = browser.switchTo().alert();
			 expect(alertDialog.getText()).toEqual("Account created successfully with account Number :1017");
			alertDialog.accept();
		 });
		 
		 it('open account_Rupee', function() {
			 var openaccount =   element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[2]')) 
			 openaccount.click();
			 element(by.cssContainingText('option', 'Harry Potter')).click();
			 element(by.cssContainingText('option', 'Rupee')).click();
			 element(by.xpath('html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button')).click();
			  browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);
			 // browser.switchTo().alert().accept();
			  var alertDialog = browser.switchTo().alert();
			 expect(alertDialog.getText()).toEqual("Account created successfully with account Number :1018");
			 alertDialog.accept();
		 });
		 
		 it('Delete Account', function() {
			 var openaccount =   element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[3]')) 
			 openaccount.click();
			var customer =  element(by.model('searchCustomer')).sendKeys('Harry');
		//	var first =element.all(by.repeater('item in items.list')).get(0).element(by.css('td')).getText();
			//console.log(first);
			
			var tabledata = element.all(by.className("table table-bordered table-striped"));

			// get rows 
			var rows = tabledata.all(by.tagName("tr"));

			// get cell values
			var cells = rows.all(by.tagName("td"));
			//var str = cells.get(5).getText();
			//console.log('str:'+ str);
			
			if(expect(cells.get(5).getText()).toEqual('Harry')){
				element(by.buttonText("Delete"));
			}
			
		 });
		 
});	