var win = Ti.UI.currentWindow;

Ti.include('app_global.js');


var myOwnAd = Ti.UI.createView({
	height: "50dp",
	bottom: 0,
	backgroundColor: "#0000ff"
});

myOwnAd.addEventListener("click", function(e) {
	Ti.Platform.openURL("https://itunes.apple.com/hk/app/trends-news/id624551281?mt=8");
});

win.add(myOwnAd);

var ad = Ti.UI.iOS.createAdView({
	width: "auto",
	height: "auto",
	adSize: Ti.UI.iOS.AD_SIZE_PORTRAIT,
	bottom: 0
});

ad.hide();

ad.addEventListener("click", function(e) {
	Ti.API.info("ad click");
});
ad.addEventListener("action", function(e) {
	Ti.API.info("action");
});
ad.addEventListener("error", function(e) {
	ad.hide();
	
	Ti.API.info("error");
});
ad.addEventListener("load", function(e) {
	ad.show();
	
	Ti.API.info("load");
});

win.add(ad);
