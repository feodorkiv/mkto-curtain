

//execute phone change 
$(document).ready(function(){
    gatherMetaVariablesPhone();
    detectViewerCountry();
});


//meta vars 
function gatherMetaVariablesPhone() {
    avForceViewerCountry = $('head meta[name=forceViewerCountry]').attr('content');
}

//detect country function
// First we see if we have a cookie
// Second we check with hostip.info which returns really fast but doesnt always have a response
// Finally we check with ipinfo.io which can be slow but seems accurate and comprehensive
function detectViewerCountry() {
    if ( avForceViewerCountry ) {
        avViewerCountry = avForceViewerCountry;
        setContactInfo();
    } else if ($.cookie('viewerCountry')) {
        avViewerCountry = $.cookie('viewerCountry');
        setContactInfo();
    } else {
        $.get("http://api.hostip.info/country.php", function (response) {
            if (response != 'XX') {
                avViewerCountry = response;
                $.cookie('viewerCountry', avViewerCountry, {
					expires: 7
                });
                setContactInfo();
            } else {
                $.ajax({
                    url: "http://ipinfo.io",
                    type: "GET",
                    dataType: "jsonp",
                    timeout: 1000,
                    success: function (response) {
                        avViewerCountry = response.country;
                        $.cookie('viewerCountry', avViewerCountry, {
                            expires: 7
                        });
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
                        $.cookie('viewerCountry', avViewerCountry, {
                              expires: 7
                          });
                          setContactInfo();
                    }
                });
            }
        }, "text");
    }
}


//change phone number
function setContactInfo() {
	var phone_number;

    switch (avViewerCountry) {
	case "RU":
		phone_number = "66-11-11";
    case "US":
    case "CA":
    case "MX":
        phone_number = ((avUSphone) ? avUSphone : "877.621.7270");
        break;
    case "UK":
    case "GB":
    case "IE":
        phone_number = ((avUKphone) ? avUKphone : "+44 (0) 20 7382 8800");
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
    default:
        phone_number = "+44 (0) 20 7382 8800";
        anglicise();
        break;
    } 
    
    $('.InfinityNumber').text(phone_number);
}
