var win = Ti.UI.currentWindow;


// Space cubesText Marathon Top-text

var calculosText = Ti.UI.createLabel({
	font : {
		fontSize : 32,
		fontWeight : 'bold'
	},
	shadowColor : '#404040',
	shadowOffset : {
		x : 1,
		y : 2
	},
	shadowRadius : 3,
	text : "Cálculos IMC",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	color : 'white',
	width : "220dp",
	top : "10dp",
	left : "45dp"
});

win.add(calculosText);



// Fuktion för att räkna ut BMI
function calcBMI() {
	// centimeter -> meter
	myLength = centimeterSlider.value / 100;

	// Gram -> Kilo
	myWeight = gramSlider.value / 1000;

	bmi = myWeight / (myLength * myLength);
	
	// Avrunda värdet
	bmi = Math.round(bmi);

	// Sätt i label
	bmiLabel.text = "Indice de Masa Corporal: ";
	bmiTextBigLabel.text = "" + bmi;
	
}

var bmiTextBigLabel = Ti.UI.createLabel({
	font : {
		fontSize : 90,
		fontWeight : 'bold'
	},
	shadowColor : 'white',
	shadowOffset : {
		x : 1,
		y : 2
	},
	shadowRadius : 3,
	text : 'bmi',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	color : '#404040',
	width : 'auto',
	height : "auto",
	left : '92dp',
	top : "370dp"
});

win.add(bmiTextBigLabel);


// Skapa ett event som kan anropas varsomhelst ifrån i appen
Ti.App.addEventListener("updateTab1Labels", function(e) {
	printMyLabels();
});

// Funktion för att sätta text i labels
function printMyLabels()
{
	// Mål: 67,2
	// 67248 / 100 =
	// 672,48
	// Math.round(672,48) =
	// 672 / 10 =
	// 67,2
	
	var myWeight = gramSlider.value; // T.ex 67248
	// Om det inte är meter måttsystem
	if (Ti.App.Properties.getBool('metric', true) == false) {
		myWeight = myWeight * 2.20462262; 
	} 
	myWeight = myWeight / 100; // 672,48
	myWeight = Math.round(myWeight); // 672
	myWeight = myWeight / 10; // 67,2
	
	// Om det är metersystem
	if (Ti.App.Properties.getBool('metric', true) == true) {
		centimeterLabel.text = "Longitud: " + Math.round(centimeterSlider.value) + "cm";

		gramLabel.text = "Peso: " + myWeight + "kg";
		
		metricLabel.text = "Unidad de Medida: Metros";
	} else {
		centimeterLabel.text = "Longitud: " + Math.round(centimeterSlider.value / 2.54) + "inch";

		gramLabel.text = "Peso: " + myWeight + "libras";
		
		metricLabel.text = "Unidad de Medida: imperial";
	}

	
	
}

// Skapa knapp för att öppna inställnings-fönster
var settingsButton = Ti.UI.createButton({
	title: "Inställningar"
}); 

settingsButton.addEventListener("click", function(e) {
	settingsWin = Ti.UI.createWindow({
		backgroundColor: "#ffffff",
		url: "settings.js" 
	});
	// När fönstret stängs, uppdatera labels
	settingsWin.addEventListener("close", function(e) {
		printMyLabels();
	});
	Ti.UI.currentTab.open(settingsWin);
});

win.rightNavButton = settingsButton;


var centimeterLabel = Titanium.UI.createLabel({
	color : '#999',
	text : 'Längd: ',
	textAlign : 'center',
	width : 'auto',
	height : "auto",
	top : "60dp"
});

win.add(centimeterLabel);

// Skapa slider
var centimeterSlider = Titanium.UI.createSlider({
	top : "100dp",
	left : "10dp",
	right : "10dp",
	min : 130,
	max : 230,
	value : 180
});

// Event för när slider ändras
centimeterSlider.addEventListener("change", function(e) {

	// Uppdatera BMI
	calcBMI();
	
	// Uppdatera labels
	printMyLabels();
});

// Byt färg på label när man början och slutar dra i slider
centimeterSlider.addEventListener("start", function(e) {
	centimeterLabel.color = "#ff0000";
});
centimeterSlider.addEventListener("stop", function(e) {
	centimeterLabel.color = "#999";
});

win.add(centimeterSlider);

////

var gramLabel = Titanium.UI.createLabel({
	color : '#999',
	text : 'Vikt: ',
	textAlign : 'center',
	width : 'auto',
	height : "auto",
	top : "147dp"
});

win.add(gramLabel);

var gramSlider = Titanium.UI.createSlider({
	top : "180dp",
	left : "10dp",
	right : "10dp",
	min : 45000,
	max : 200000,
	value : 50000
});

gramSlider.addEventListener("change", function(e) {
	printMyLabels();
	
	// Uppdatera BMI
	calcBMI();
});

gramSlider.addEventListener("start", function(e) {
	gramLabel.color = "#ff0000";
});

gramSlider.addEventListener("stop", function(e) {
	gramLabel.color = "#999";
});

win.add(gramSlider);

var bmiLabel = Titanium.UI.createLabel({
	color : 'white',
	text : 'BMI: ',
	textAlign : 'center',
	width : 'auto',
	height : "auto",
	top : "330dp"
});

win.add(bmiLabel);

var metricLabel = Titanium.UI.createLabel({
	color : '#000000',
	text : 'Måttenhet: meter',
	textAlign : 'center',
	width : 'auto',
	height : "auto",
	top : "300dp"
});

win.addEventListener("androidback", function(e) {
	////////
	win.close();	
});

var metricLabel = Titanium.UI.createLabel({
	color : 'white',
	text : 'Unidad de Medida: metros',
	textAlign : 'center',
	width : 'auto',
	height : "auto",
	top : "220dp"
});

if (Ti.App.Properties.getBool('metric', true) == true) {
	metricLabel.text = 'Unidad de Medida: metros';
} else {
	metricLabel.text = 'Unidad de Medida: imperial';
}

win.add(metricLabel);

var basicSwitch = Ti.UI.createSwitch({
	top : "260dp",
	value : Ti.App.Properties.getBool('metric', true)
});
win.add(basicSwitch);

basicSwitch.addEventListener('change', function(e) {
	Ti.API.info('Switch value: ' + basicSwitch.value);

	Ti.App.Properties.setBool('metric', basicSwitch.value);

	if (Ti.App.Properties.getBool('metric', true) == true) {
		metricLabel.text = 'Unidad de Medida: meter';
	} else {
		metricLabel.text = 'Unidad de Medida: imperial';
	}
}); 

// Vector Info in Color green

var infoview = Titanium.UI.createView({
   borderRadius:70,
   backgroundColor:'black',
   opacity: '0.0',
   top: '350dp',
   width:'150dp',
   height:'150dp'
});
win.add(infoview);

var infobild = Ti.UI.createImageView({
	image : "images/info.png",
	top : "428dp",
	width : "30dp",
	left : "200dp"
});

win.add(infobild);



var infoButton = Ti.UI.createButton({
	backgroundColor : "none",
	top: '350dp',
   	width:'150dp',
   	height:'150dp'
});

win.add(infoButton);

infoButton.addEventListener('click', function(e) {
	
	var infoview = Titanium.UI.createWindow({
		navBarHidden: false,
		url : "infoIBM.js",
		fullscreen: true,
		exitOnClose: false,
		backgroundColor:'#99cc66',
		webUrl: 'Views/info.html'
	});

	infoview.open();

});

var Admob = require('ti.admob');

var ad = Admob.createView({
    bottom: 0,
    width: 320, height: 50,
    publisherId: 'ca-app-pub-8452555184778145/7159138919', // Ad unit ID
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

