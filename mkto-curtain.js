//suppres list -extended
		var invalidaddress=new Array();
		invalidaddress[0]="163";
		invalidaddress[1]="mail";
		invalidaddress[2]="126";
		invalidaddress[3]="yandex";
		invalidaddress[4]="yeah";
		invalidaddress[5]="115mail";
		invalidaddress[6]="easyblogs";
		invalidaddress[7]="technidem";
		invalidaddress[8]="sina";
		invalidaddress[9]="qq";
		invalidaddress[10]="mailcatch";
		invalidaddress[11]="m";
		invalidaddress[12]="urx7";
		invalidaddress[13]="ymail";
		invalidaddress[14]="trash-mail";
		invalidaddress[15]="yahoo";
		invalidaddress[16]="hotmail";
		invalidaddress[17]="outlook";
		invalidaddress[18]="aol";
		invalidaddress[19]="mailinator";
		invalidaddress[20]="yopmail";
		invalidaddress[21]="asdf";
		invalidaddress[22]="optonline";
		invalidaddress[23]="myself";
		invalidaddress[23]="rogers";
		//extend or shorten this list if neccessary
		//curtain list
		var curtainaddress = new Array();
		curtainaddress[0]="gmail";
		//extend or shorten this list if neccessary
		var testresults;
		var curtainTestResults;
	//suppress email checker
		function checkEmail(emailString){
			var invalidcheck=0;
			var str=emailString;
			var tempstring=str.split("@");
			tempstring=tempstring[1].split(".");
			for (i=0;i<invalidaddress .length;i++){
				if (tempstring[0]==invalidaddress[i]){
					invalidcheck=1;
				}
			};
			if (invalidcheck!=1){
				testresults=true;
			}else{
				testresults=false;
			}
			return (testresults);
		}
		//curtain email checker
		function checkCurtainEmail(emailString){
			var curtaincheck=0;
			var str=emailString;
			var tempstring=str.split("@");
			tempstring=tempstring[1].split(".");
			for (i=0;i<curtainaddress .length;i++){
				if (tempstring[0]==curtainaddress[i]){
					curtaincheck=1;
				}
			};
			if (curtaincheck!=1){
				curtainTestResults=true;
			}else{
				curtainTestResults=false;
			}
			return (curtainTestResults);
		}

		//api calls
		//listen for the validate event
	//check if object is there
	if (window.MktoForms2) {
		MktoForms2.whenReady(function(form){
		var submissionCounter = 0;
		form.onValidate(function(){
			var vals = form.vals();
			var email = vals.Email;
				if (checkEmail(email)===false) {
					//prevent form submission
					form.submittable(false);
					//Show error message, pointed at email element
					var emailElement = form.getFormElem().find("#Email");
					form.showErrorMessage("Please enter a valid email", emailElement);
				} else {
					//check curtain list
					if ((checkCurtainEmail(email)===false)&&(submissionCounter == 0)) {
						//prevent form submission
						form.submittable(false);
						//Show error message, pointed at email element
						var emailElement = form.getFormElem().find("#Email");
						form.showErrorMessage("Please enter a business email" , emailElement);
						submissionCounter++;
						console.log(submissionCounter);
					}else {
						//enable submission for those who met the criteria.
						form.submittable(true);
					}	
				}	
		});
		});
	} else {console.log("MktoForm doesn't exist here"); };
