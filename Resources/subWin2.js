var win = Ti.UI.currentWindow;

win.backButtonTitle = 'Back';

var webView = Ti.UI.createWebView({
	url:win.webUrl,
	top: 0,
	bottom: "50dp"
});
win.add(webView);



var Admob = require('ti.admob');

    var ad = Admob.createView({
	    bottom: 0,
	    width: 320, height: 50,
	    publisherId: 'ca-app-pub-8452555184778145/7159138919', // Ad unit ID
	    adBackgroundColor: 'transparent',
	    fullscreen: true,
	    exitOnClose: true,
	    keepScreenOn: true,
	    testing: false,
	    //dateOfBirth: new Date(1985, 10, 1, 12, 1, 1),
	    //gender: 'male',
	    keywords: ''
	    });
	    
  
win.add(ad);

ad.addEventListener('didReceiveAd', function() {
  //  alert('Did receive ad!');
});
ad.addEventListener('didFailToReceiveAd', function() {
 //   alert('Failed to receive ad!');
});
ad.addEventListener('willPresentScreen', function() {
 //   alert('Presenting screen!');
});
ad.addEventListener('willDismissScreen', function() {
 //   alert('Dismissing screen!');
});
ad.addEventListener('didDismissScreen', function() {
 //   alert('Dismissed screen!');
});
ad.addEventListener('willLeaveApplication', function() {
//    alert('Leaving the app!');
});

