

//execute phone change 
jQuery(document).ready(function(){
    detectViewerCountry();
});


//detect country function
// First we see if we have a cookie
// then we check with ipinfo.io 
function detectViewerCountry() {
     if (jQuery.cookie('viewerCountry')) {
        avViewerCountry = jQuery.cookie('viewerCountry');
        setContactInfo();
    } else {
                jQuery.ajax({
                    url: "https://ipinfo.io?token=54f3878868923d",
                    type: "GET",
                    dataType: "json",
                    success: function (response) {
                        avViewerCountry = response.country;
                        jQuery.cookie('viewerCountry', avViewerCountry, {
                            expires: 7
                        });
						console.log(avViewerCountry);
                        setContactInfo();
						},
                    error: function (response) {
						//default phone
						console.log('ipinfo error');
                    }
                });
            }
    };


//change phone number
function setContactInfo() {
	
	var phone_number;
	var USPhoneNumber = 'US Phone +1 (855) 653-5627';
	var UKPhoneNumber = 'UK Phone +1 (855) 653-5627';
	var IndiaPhoneNumber = 'India Phone +91 124 4934700';
	var SingaporePhoneNumber = 'Singapore Phone +65 62217920';
	var AustraliaPhoneNumber ='Australia Phone +61 (0)2 9004 7868';
	var HongKongPhoneNumber='HongKong Phone +852 8100 9648';
	
	/*using case for the case (lol) when we will need special number for certain country*/
    switch (avViewerCountry) {		
	//US Phone Countries - 2 digit ISO codes		
    case "US":
		phone_number = USPhoneNumber;
		break;
	case "CA":
		phone_number = USPhoneNumber;
		break;
	case "MX":
		phone_number = USPhoneNumber;
		break;
	case "PR": /*puerto rico*/
		phone_number = USPhoneNumber;
		break;
		
//UK Phone Countries, Europe

	case "AL":
		phone_number = UKPhoneNumber;
		break;
	case "AD":
		phone_number = UKPhoneNumber;
		break;	
	case "AD":
		phone_number = UKPhoneNumber;
		break;		
	case "AM":
		phone_number = UKPhoneNumber;
		break;
	case "AT":
		phone_number = UKPhoneNumber;
		break;
	case "AZ":
		phone_number = UKPhoneNumber;
		break;	
	case "BY":
		phone_number = UKPhoneNumber;
		break;		
	case "BE":
		phone_number = UKPhoneNumber;
		break;		
	case "BA":
		phone_number = UKPhoneNumber;
		break;
	case "BG":
		phone_number = UKPhoneNumber;
		break;
	case "HR":
		phone_number = UKPhoneNumber;
		break;
	case "CY":
		phone_number = UKPhoneNumber;
		break;	
	case "CZ":
		phone_number = UKPhoneNumber;
		break;		
	case "DK":
		phone_number = UKPhoneNumber;
		break;
	case "EE":
		phone_number = UKPhoneNumber;
		break;
	case "FI":
		phone_number = UKPhoneNumber;
		break;
	case "FR":
		phone_number = UKPhoneNumber;
		break;
	case "GE":
		phone_number = UKPhoneNumber;
		break;
	case "DE":
		phone_number = UKPhoneNumber;
		break;
	case "GR":
		phone_number = UKPhoneNumber;
		break;
	case "HU":
		phone_number = UKPhoneNumber;
		break;
	case "IS":
		phone_number = UKPhoneNumber;
		break;	
	case "IE": /*Ireland*/
		phone_number = UKPhoneNumber;
		break;
	case "IT":
		phone_number = UKPhoneNumber;
		break;
	case "XK":
		phone_number = UKPhoneNumber;
		break;
	case "LV":
		phone_number = UKPhoneNumber;
		break;
	case "LI":
		phone_number = UKPhoneNumber;
		break;
	case "LU":
		phone_number = UKPhoneNumber;
		break;
	case "MK":
		phone_number = UKPhoneNumber;
		break;
	case "MT":
		phone_number = UKPhoneNumber;
		break;
	case "MD":
		phone_number = UKPhoneNumber;
		break;
	case "MA":
		phone_number = UKPhoneNumber;
		break;
	case "MS":
		phone_number = UKPhoneNumber;
		break;
	case "NL":
		phone_number = UKPhoneNumber;
		break;
	case "NO":
		phone_number = UKPhoneNumber;
		break;
	case "PL":
		phone_number = UKPhoneNumber;
		break;	
	case "PT":
		phone_number = UKPhoneNumber;
		break;
	case "RO":
		phone_number = UKPhoneNumber;
		break;
	case "RU":
		phone_number = UKPhoneNumber;
		break;
	case "SM":
		phone_number = UKPhoneNumber;
		break;
	case "RS":/*Serbia*/
		phone_number = UKPhoneNumber;
		break;
	case "SK":
		phone_number = UKPhoneNumber;
		break;
	case "SI":
		phone_number = UKPhoneNumber;
		break;
	case "ES":
		phone_number = UKPhoneNumber;
		break;
	case "SE":
		phone_number = UKPhoneNumber;
		break;
	case "CH":
		phone_number = UKPhoneNumber;
		break;
	case "UA":
		phone_number = UKPhoneNumber;
		break;
	case "UK":
		phone_number = UKPhoneNumber;
		break;
	case "VA":
		phone_number = UKPhoneNumber;
		break;
	case "IL":/*Israel*/
		phone_number = UKPhoneNumber;
		break;	

/*India Phone Countries*/

	case "ZA":
		phone_number = IndiaPhoneNumber;
		break;		
	case "DZ":
		phone_number = IndiaPhoneNumber;
		break;			
	case "AO":
		phone_number = IndiaPhoneNumber;
		break;			
	case "BJ":
		phone_number = IndiaPhoneNumber;
		break;	
	case "BW":
		phone_number = IndiaPhoneNumber;
		break;	
	case "BF":
		phone_number = IndiaPhoneNumber;
		break;	
	case "BI":
		phone_number = IndiaPhoneNumber;
		break;	
	case "CM":
		phone_number = IndiaPhoneNumber;
		break;	
	case "CV":
		phone_number = IndiaPhoneNumber;
		break;	
	case "AF":
		phone_number = IndiaPhoneNumber;
		break;	
	case "TD":/*Chad*/
		phone_number = IndiaPhoneNumber;
		break;	
	case "KM":
		phone_number = IndiaPhoneNumber;
		break;	
	case "CG":
		phone_number = IndiaPhoneNumber;
		break;	
	case "CD":
		phone_number = IndiaPhoneNumber;
		break;	
	case "CI":
		phone_number = IndiaPhoneNumber;
		break;	
	case "DJ":
		phone_number = IndiaPhoneNumber;
		break;	
	case "EG":
		phone_number = IndiaPhoneNumber;
		break;	
	case "GQ":/*Equatorial Guinea*/
		phone_number = IndiaPhoneNumber;
		break;	
	case "ER":
		phone_number = IndiaPhoneNumber;
		break;	
	case "ET":
		phone_number = IndiaPhoneNumber;
		break;			
	case "GA":
		phone_number = IndiaPhoneNumber;
		break;
	case "GM":
		phone_number = IndiaPhoneNumber;
		break;
	case "GW":
		phone_number = IndiaPhoneNumber;
		break;
	case "KE":
		phone_number = IndiaPhoneNumber;
		break;
	case "LS":
		phone_number = IndiaPhoneNumber;
		break;
	case "LR":
		phone_number = IndiaPhoneNumber;
		break;
	case "LY":
		phone_number = IndiaPhoneNumber;
		break;
	case "MG":
		phone_number = IndiaPhoneNumber;
		break;
	case "MW":
		phone_number = IndiaPhoneNumber;
		break;	
	case "ML":
		phone_number = IndiaPhoneNumber;
		break;
	case "MR":
		phone_number = IndiaPhoneNumber;
		break;			
	case "MU":
		phone_number = IndiaPhoneNumber;
		break;
	case "MZ":
		phone_number = IndiaPhoneNumber;
		break;
	case "NA":
		phone_number = IndiaPhoneNumber;
		break;
	case "NE":
		phone_number = IndiaPhoneNumber;
		break;			
	case "NG":
		phone_number = IndiaPhoneNumber;
		break;
	case "RW":
		phone_number = IndiaPhoneNumber;
		break;
	case "ST":
		phone_number = IndiaPhoneNumber;
		break;
	case "SN":
		phone_number = IndiaPhoneNumber;
		break;
	case "SC": 
		phone_number = IndiaPhoneNumber;
		break;	
	case "SL":
		phone_number = IndiaPhoneNumber;
		break;	
	case "SO":
		phone_number = IndiaPhoneNumber;
		break;
	case "GS":
		phone_number = IndiaPhoneNumber;
		break;
	case "SD":
		phone_number = IndiaPhoneNumber;
		break;
	case "SZ":
		phone_number = IndiaPhoneNumber;
		break;
	case "TZ":
		phone_number = IndiaPhoneNumber;
		break;
	case "TG":
		phone_number = IndiaPhoneNumber;
		break;
	case "TN":
		phone_number = IndiaPhoneNumber;
		break;
	case "UG":
		phone_number = IndiaPhoneNumber;
		break;
	case "ZM":
		phone_number = IndiaPhoneNumber;
		break;
	case "SW":
		phone_number = IndiaPhoneNumber;
		break;
	case "GN":
		phone_number = IndiaPhoneNumber;
		break;
	case "GH":
		phone_number = IndiaPhoneNumber;
		break;
	case "MA":
		phone_number = IndiaPhoneNumber;
		break;
	case "AF":
		phone_number = IndiaPhoneNumber;
		break;
	case "BH":
		phone_number = IndiaPhoneNumber;
		break;
	case "BD":
		phone_number = IndiaPhoneNumber;
		break;			
	case "BT":
		phone_number = IndiaPhoneNumber;
		break;
	case "IN": /*India*/
		phone_number = IndiaPhoneNumber;
		break;			
	case "IF":
		phone_number = IndiaPhoneNumber;
		break;
	case "IQ":
		phone_number = IndiaPhoneNumber;
		break;
	case "JO":
		phone_number = IndiaPhoneNumber;
		break;
	case "KW":
		phone_number = IndiaPhoneNumber;
		break;
	case "LB":
		phone_number = IndiaPhoneNumber;
		break;
	case "MM":
		phone_number = IndiaPhoneNumber;
		break;			
	case "NP":
		phone_number = IndiaPhoneNumber;
		break;
	case "OM":
		phone_number = IndiaPhoneNumber;
		break;
	case "PK":
		phone_number = IndiaPhoneNumber;
		break;
	case "QA":
		phone_number = IndiaPhoneNumber;
		break;
	case "SA":
		phone_number = IndiaPhoneNumber;
		break;
	case "LK":
		phone_number = IndiaPhoneNumber;
		break;
	case "SY":
		phone_number = IndiaPhoneNumber;
		break;
	case "TR":
		phone_number = IndiaPhoneNumber;
		break;	
	case "AE":
		phone_number = IndiaPhoneNumber;
		break;
	case "YE":
		phone_number = IndiaPhoneNumber;
		break;			

/*Singapore Phone Countries*/
	case "BN":
		phone_number = SingaporePhoneNumber;
		break;	
	case "KH":
		phone_number = SingaporePhoneNumber;
		break;
	case "CN":
		phone_number = SingaporePhoneNumber;
		break;
	case "TP":
		phone_number = SingaporePhoneNumber;
		break;
	case "ID":
		phone_number = SingaporePhoneNumber;
		break;
	case "JP":
		phone_number = SingaporePhoneNumber;
		break;
	case "KZ":
		phone_number = SingaporePhoneNumber;
		break;
	case "KP":
		phone_number = SingaporePhoneNumber;
		break;
	case "KR":
		phone_number = SingaporePhoneNumber;
		break;
	case "KG":
		phone_number = SingaporePhoneNumber;
		break;
	case "LA":
		phone_number = SingaporePhoneNumber;
		break;
	case "MY":
		phone_number = SingaporePhoneNumber;
		break;
	case "MV":
		phone_number = SingaporePhoneNumber;
		break;
	case "MN":
		phone_number = SingaporePhoneNumber;
		break;
	case "PH":
		phone_number = SingaporePhoneNumber;
		break;
	case "SG":
		phone_number = SingaporePhoneNumber;
		break;
	case "TW":
		phone_number = SingaporePhoneNumber;
		break;			
	case "TJ":
		phone_number = SingaporePhoneNumber;
		break;
	case "TH":
		phone_number = SingaporePhoneNumber;
		break;
	case "HK": /*Hong Kong*/
		phone_number = HongKongPhoneNumber;
		break;
	case "TM":
		phone_number = SingaporePhoneNumber;
		break;			
	case "UZ":
		phone_number = SingaporePhoneNumber;
		break;	
	case "VN":
		phone_number = SingaporePhoneNumber;
		break;			
	
/*Australia Phone Countries*/
	case "AU":
		phone_number = AustraliaPhoneNumber;
		break;		
	case "FJ":
		phone_number = AustraliaPhoneNumber;
		break;
	case "KI":
		phone_number = AustraliaPhoneNumber;
		break;
	case "MH":
		phone_number = AustraliaPhoneNumber;
		break;
	case "FM":
		phone_number = AustraliaPhoneNumber;
		break;
	case "WS":
		phone_number = AustraliaPhoneNumber;
		break;				
	case "SB":
		phone_number = AustraliaPhoneNumber;
		break;
	case "NR":
		phone_number = AustraliaPhoneNumber;
		break;
	case "NZ":
		phone_number = AustraliaPhoneNumber;
		break;
	case "PW":
		phone_number = AustraliaPhoneNumber;
		break;
	case "PG":
		phone_number = AustraliaPhoneNumber;
		break;
	case "TO":
		phone_number = AustraliaPhoneNumber;
		break;				
	case "TV":
		phone_number = AustraliaPhoneNumber;
		break;
	case "VU":
		phone_number = AustraliaPhoneNumber;
		break;				
		
		
    default:
        phone_number = UKPhoneNumber;
        break;
    } 
    
    jQuery('.InfinityNumber').append('<div class="aventionPhone">'+phone_number+'</div>');
}
