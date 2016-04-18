

//execute phone change 
jQuery(document).ready(function(){
    gatherMetaVariablesPhone();
    detectViewerCountry();
});


//meta vars 
function gatherMetaVariablesPhone() {
    avForceViewerCountry = jQuery('head meta[name=forceViewerCountry]').attr('content');
}

//detect country function
// First we see if we have a cookie
// Second we check with hostip.info which returns really fast but doesnt always have a response
// Finally we check with ipinfo.io which can be slow but seems accurate and comprehensive
function detectViewerCountry() {
    if ( avForceViewerCountry ) {
        avViewerCountry = avForceViewerCountry;
        setContactInfo();
    } else if (jQuery.cookie('viewerCountry')) {
        avViewerCountry = jQuery.cookie('viewerCountry');
        setContactInfo();
    } else {
                jQuery.ajax({
                    url: "https://ipinfo.io?token=54f3878868923d",
                    type: "GET",
                    dataType: "jsonp",
                    timeout: 1000,
                    success: function (response) {
                        avViewerCountry = response.country;
                        jQuery.cookie('viewerCountry', avViewerCountry, {
                            expires: 7
                        });
						console.log(avViewerCountry);
                        setContactInfo();
						},
                    error: function (response) {
                        var urlDetails, region;
  
                        urlDetails = parseURL(location.href);
                        region = decodeURI(urlDetails.params.utm_region);
                        switch (region) {
                        case "ANZ":
                            avViewerCountry = "AU";
                            break;
                        case "EUR":
                            avViewerCountry = "UK";
                            break;
                        case "IND":
                            avViewerCountry = "IN";
                            break;
                        case "SGH":
                            avViewerCountry = "SG";
                            break;
                        case "UK":
                            avViewerCountry = "UK";
                            break;
                        case "US":
                            avViewerCountry = "US";
                            break;
                        }
                        jQuery.cookie('viewerCountry', avViewerCountry, {
                              expires: 7
                          });
                          setContactInfo();
                    }
                });
            }
    };


//change phone number
function setContactInfo() {
	
	var phone_number;

    switch (avViewerCountry) {
	case "RU":
		phone_number = "Russia Phone Number";
		break;
    case "US":
		phone_number = "US phone number";
		break;
	/*	
    case "CA":
    case "MX":
        phone_number = "877.621.7270";
        break;
    case "UK":
    case "GB":
    case "IE":
        phone_number = "+44 (0) 20 7382 8800";
        anglicise();
        break;
    case "AU":
    case "NZ":
        phone_number = "+61 2 9004 7868";
        anglicise();
        break;
    case "SG":
        phone_number = "+65 62217920";
        anglicise();
        break;
    case "IN":
        phone_number = "+91 124 4934700";
        anglicise();
        break;
    case "HK":
    case "JP":
    case "MY":
    case "TH":
    case "KR":
    case "CN":
    case "TW":
        phone_number = "+852 81009648";
        anglicise();
        break;
	*/	
    default:
        phone_number = "+44 (0) 20 7382 8800";
        break;
    } 
    
    jQuery('.InfinityNumber').text(phone_number);
}
