describe('calculator test scripts', function() {
	beforeEach(function() {
		 browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/manager');
		 browser.manage().window().maximize();	
	});
	
 
  
  it('display web table contents', function() {
	    calculate(200,2,3);
	    calculate(200,2,0);
	    calculate(200,2,1);
	    element.all(by.repeater('result in memory')).then(function(text){
	    	for(i=0;i<text.length;i++){
	    	text[i].getText().then(function(data) {
	    		console.log(data);
	    		
	    		});
	    	}
	    })
	  
	   
	   
	  });
  
  });