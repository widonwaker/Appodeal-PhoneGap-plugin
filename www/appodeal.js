
	var Appodeal = exports;

	var exec = require('cordova/exec');
	var cordova = require('cordova');
	
	Appodeal.INTERSTITIAL = 1;
	Appodeal.VIDEO = 2;
	Appodeal.ANY = 7;
	Appodeal.ALL = 7;
	
	Appodeal.initialize = function(appKey) {
		exec(null, null, "AppodealPlugin", "initialize", [appKey]);
	}
	
	Appodeal.initialize = function(appKey, adType) {
		exec(null, null, "AppodealPlugin", "initializeAdType", [appKey, adType]);
	}
	
	Appodeal.enableInterstitialCallbacks = function(listener) {
		exec(null, null, "AppodealPlugin", "enableIntertitialCallbacks", [listener]);
	}
	
	Appodeal.enableVideoCallbacks = function(listener) {
		exec(null, null, "AppodealPlugin", "enableVideoCallbacks", [listener]);
	}

	Appodeal.isLoaded = function(adType, callback) {
		exec(function(e){if(typeof callback=='function'){if(e==1){callback(true);}else{callback(false);}}}, null, "AppodealPlugin", "isLoaded", [adType]);
	}
	
	Appodeal.isPrecache = function(adType, callback) {
		exec(function(e){if(typeof callback=='function'){if(e==1){callback(true);}else{callback(false);}}}, null, "AppodealPlugin", "isPrecache", [adType]);
	}
	
	Appodeal.show = function(adType, callback) {
		exec(function(e){if(typeof callback=='function'){if(e==1){callback(true);}else{callback(false);}}}, null, "AppodealPlugin", "show", [adType]);
	}

	Appodeal.showWithPriceFloor = function(adType, callback) {
		exec(function(e){if(typeof callback=='function'){if(e==1){callback(true);}else{callback(false);}}}, null, "AppodealPlugin", "showWithPriceFloor", [adType]);
	}
	
	Appodeal.setAutoCache = function(adType, autoCache) {
		exec(null, null, "AppodealPlugin", "setAutoCache", [adType, autoCache]);
	}
	
	Appodeal.cache = function(adType) {
		exec(null, null, "AppodealPlugin", "cacheBanner", [adType]);
	}
	
	Appodeal.setOnLoadedTriggerBoth = function(adType, setTrigger) {
		exec(null, null, "AppodealPlugin", "setOnLoadedTriggerBoth", [adType, setTrigger]);
	}
	
	Appodeal.disableNetwork = function(network) {
		exec(null, null, "AppodealPlugin", "disableNetwork", [network]);
	}
