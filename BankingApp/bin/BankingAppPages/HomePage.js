var Home=function(){
	
	var customer_login= element(by.name('Customer Login'));
	var manager_login= element(by.name('Bank Manager Login'));
	
	
	 it('should click on the customer link', function() {
		 customer_login.click();
		 browser.sleep(3000);
     expect(element(by.xpath('html/body/div[3]/div/div[2]/div/form/div/label')).getText()).toEqual('Your Name');
     });
	 
	 it('should click on the manager link', function() {
		 manager_login.click();
		 browser.sleep(3000);
     expect(element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[1]')).getText()).toEqual('Add Customer ');
     });
	
}
module.exports=new Home();