describe('Multiform e2e automation for CustomerLogin', function() {
	it('e2e flow', function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		element(by.partialButtonText('Customer Login')).click();
		browser.sleep(4000);
		
		
	});

describe('Multiform e2e automation for CustomerLogin', function() {
		 it('Customer Login', function() {
			 element(by.cssContainingText('option', 'Harry Potter')).click();
			 element(by.buttonText('Login')).click();
			 var span1 =element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/strong/span'));
			 expect(span1.getText()).toEqual("Harry Potter");
			 browser.sleep(4000);
			  });	
	});


describe('Multiform e2e automation for CustomerLogin_Verify Currency Type', function() {
	it('Verify Currency Type', function() {
		 var type1 =element(by.xpath('html/body/div[3]/div/div[2]/div/div[2]/strong[3]'));
		 expect(type1.getText()).toEqual("Dollar");
		 element(by.cssContainingText('option', '1005')).click();
		 var type3 =element(by.xpath('html/body/div[3]/div/div[2]/div/div[2]/strong[3]'));
		 expect(type1.getText()).toEqual("Pound");	
		 element(by.cssContainingText('option', '1006')).click();
		 var type2 =element(by.xpath('html/body/div[3]/div/div[2]/div/div[2]/strong[3]'));
		 expect(type1.getText()).toEqual("Rupee");
		 	 
		});
});
	
	describe('Multiform e2e automation for CustomerLogin_Verify Transactions', function() {
		it('Initial Transaction', function() {
			element(by.buttonText('Transactions')).click();
			var tabledata = element.all(by.className("table table-bordered table-striped"));

			// get rows 
			var rows = tabledata.all(by.tagName("tr"));

			// get cell values
			var cells = rows.all(by.tagName("td"));
			
			expect(rows.count()).toEqual(1);
			element(by.buttonText('Back')).click();
		});
		 
	});

	describe('Multiform e2e automation for CustomerLogin_Deposit Money', function() {
		it('Deposit Money', function() {
			 element(by.cssContainingText('option', '1006')).click();
			element(by.xpath('html/body/div[3]/div/div[2]/div/div[3]/button[2]')).click();
			browser.sleep(3000);
			element(by.model('amount')).sendKeys('2000');
			browser.sleep(3000);
			element(by.className('btn btn-default')).click();
			//element(by.xpath('html/body/div[3]/div/div[2]/div/div[4]/div/form/button')).click();
			var span1 = element(by.xpath('html/body/div[3]/div/div[2]/div/div[4]/div/span'));
			expect(span1.getText()).toEqual("Deposit Successful");
			browser.sleep(4000)
			
			
		});
		
		 
	});
	
	describe('Multiform e2e automation for CustomerLogin_Transcation_AfterDeposit', function() {
		it('Transcation_After_Deposit', function() {
			 element(by.cssContainingText('option', '1006')).click();
			element(by.buttonText('Transactions')).click();
			var tabledata = element.all(by.className("table table-bordered table-striped"));

			// get rows 
			var rows = tabledata.all(by.tagName("tr"));

			// get cell values
			var cells = rows.all(by.tagName("td"));
			
			expect(cells.get(4).getText()).toEqual('2000');
			expect(cells.get(5).getText()).toEqual('Credit');
			element(by.buttonText('Back')).click();
		});
		
		 
	});
	
	describe('Multiform e2e automation for CustomerLogin_WithdrawError', function() {
		it('Withdraw Error', function() {
			// element(by.cssContainingText('option', '1006')).click();
			element(by.buttonText('Withdrawl')).click();
			var tabledata = element.all(by.className("table table-bordered table-striped"));
			element(by.model('amount')).sendKeys('3000');
			browser.sleep(3000);
			element(by.className('btn btn-default')).click();
			 var span1 =element(by.xpath('html/body/div[3]/div/div[2]/div/div[4]/div/span'));
			 expect(span1.getText()).toEqual('Transaction Failed. You can not withdraw amount more than the balance.');
			 browser.sleep(4000);
		});
	});
	
	describe('Multiform e2e automation for CustomerLogin_WithdrawSuccess', function() {
		it('Withdraw Success', function() {
			 //element(by.cssContainingText('option', '1006')).click();
			element(by.buttonText('Withdrawl')).click();
			var tabledata = element.all(by.className("table table-bordered table-striped"));
			element(by.model('amount')).sendKeys('1000');
			browser.sleep(3000);
			element(by.className('btn btn-default')).click();
			 var span1 =element(by.xpath('html/body/div[3]/div/div[2]/div/div[4]/div/span'));
			 expect(span1.getText()).toEqual("Transaction successful");
			 browser.sleep(4000);
		});
		
		 
	});

	describe('Multiform e2e automation for CustomerLogin_TransactionAfterWidrawal', function() {
		it('Transaction after Widrwawal & Home page', function() {
			// element(by.cssContainingText('option', '1006')).click();
				element(by.buttonText('Transactions')).click();
				var tabledata = element.all(by.className("table table-bordered table-striped"));

				// get rows 
				var rows = tabledata.all(by.tagName("tr"));

				// get cell values
				var cells = rows.all(by.tagName("td"));
				expect(cells.get(4).getText()).toEqual('2000');
				expect(cells.get(5).getText()).toEqual('Credit');
				element(by.buttonText('Back')).click();
				var span1 =element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/strong/span'));
				 expect(span1.getText()).toEqual("Harry Potter");
				browser.sleep(5000);
		});
		
		 
	});
	
	describe('Multiform e2e automation for CustomerLogin_TransactionReset', function() {
		it('Transaction after Reset', function() {
		
			// element(by.cssContainingText('option', '1006')).click();
			 element(by.buttonText('Transactions')).click();
			 element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[2]')).click();
			 var tabledata = element.all(by.className("table table-bordered table-striped"));
				// get rows 
			 var rows = tabledata.all(by.tagName("tr"));

				// get cell values
			 var cells = rows.all(by.tagName("td"));
			 expect(rows.count()).toEqual(1);
		});
		
		 
	});
	
	describe('Multiform e2e automation for GoTo Main Page', function() {
		it('Log Out', function() {
		
			 element(by.buttonText('Logout')).click();
			 browser.sleep(5000);
			 expect(browser.getTitle()).toContain('Protractor practice website');
			 browser.sleep(3000);
			    
		});
		
		 
	});
	
});