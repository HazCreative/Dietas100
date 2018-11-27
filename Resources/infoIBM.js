var win = Ti.UI.currentWindow;


// Picture Logo in Color
var minBildLogo = Ti.UI.createImageView({
	shadowColor : '#222222',
	shadowOffset : {
		x : 1,
		y : 2
	},
	shadowRadius : 3,
	image : "images/cube_ligthGray.png",
	top : "3dp",
	width : "36dp",
	left : "10dp"
});

win.add(minBildLogo);


//  top rigth text "Menu"
var rigthText = Ti.UI.createLabel({
	font : {
		fontSize : 14,
		fontWeight : 'bold'
	},
	shadowColor : 'white',
	shadowOffset : {
		x : 2,
		y : 1
	},
	shadowRadius : 3,
	text : "Cerrar",
	color : '#000033',
	top : "14dp",
	left : "50dp"
});
win.add(rigthText);

// BackButton is aling the same place as logo BW
var backButton = Ti.UI.createButton({
	backgroundColor : "",
	top : "0dp",
	bottom : "518dp",
	width : "100dp",
	heigth : "16dp",
	left : "0dp",
});

backButton.addEventListener('click', function(e) {
	win.close();
});

win.add(backButton);

////////////End TOP Button////////////////////////


var webView = Ti.UI.createWebView({
	url:'Views/info.html',
	top: 40
});
win.add(webView);


var Admob = require('ti.admob');

var ad = Admob.createView({
    bottom: 0,
    width: 320, height: 50,
    publisherId: 'ca-app-pub-8452555184778145/7159138919', // You can get your own at http: //www.admob.com/
    adBackgroundColor: 'transparent',
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
