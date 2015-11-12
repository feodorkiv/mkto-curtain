var avUTMprogram = ''; // set the default utm_program code


function gatherMetaVariables() {
    avUTMprogram = jQuery('head meta[name=utm_program]').attr('content');
};

function setDefaultUTM() {
    var utm_program = decodeURI(parseURL(location.href).params.utm_program);
    if (utm_program != "undefined") { // If there is a utm_program in the URL query string
      jQuery('input[name=utm_program__c]').val(utm_program);
    }
    else if (avUTMprogram!="no-default") { // If there is a utm_program defined in the meta
      jQuery('input[name=utm_program__c]').val(avUTMprogram);
    }
}

// http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
function parseURL(url) {
      var a = document.createElement('a');
      a.href = url;
      return {
          source: url,
          protocol: a.protocol.replace(':', ''),
          host: a.hostname,
          port: a.port,
          query: a.search,
          params: (function () {
              var ret = {},
                  seg = a.search.replace(/^\?/, '').split('&'),
                  len = seg.length,
                  i = 0,
                  s;
              for (; i < len; i++) {
                  if (!seg[i]) {
                      continue;
                  }
                  s = seg[i].split('=');
                  ret[s[0]] = s[1];
              }
              return ret;
          })(),
          file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
          hash: a.hash.replace('#', ''),
          path: a.pathname.replace(/^([^\/])/, '/$1'),
          relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
          segments: a.pathname.replace(/^\//, '').split('/')
      };
  } 

//execute
jQuery(document).ready(function(){
    gatherMetaVariables();
 
if (window.MktoForms2) { 
	setTimeout(function() {
		// set the hidden utm_program__c after 1.5 seconds to give MKTO a chance to settle down
		 setDefaultUTM();
	},1500);		
}

});
