var win = Ti.UI.currentWindow;

// Space cubesText Marathon Top-text
var spcubesMarathonText = Ti.UI.createLabel({
	font : {
		fontSize : 16,
		fontWeight : 'bold'
	},
	shadowColor : '#404040',
	shadowOffset : {
		x : 1,
		y : 2
	},
	shadowRadius : 3,
	text : "Configuración",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	color : 'white',
	width : "220dp",
	top : "24dp",
	left : "45dp"
});

win.add(spcubesMarathonText);

win.addEventListener("androidback", function(e) {
	////////
	win.close();	
});

var metricLabel = Titanium.UI.createLabel({
	color : '#000000',
	text : 'Måttenhet: meter',
	textAlign : 'center',
	width : 'auto',
	height : "auto",
	top : "120dp"
});

if (Ti.App.Properties.getBool('metric', true) == true) {
	metricLabel.text = 'Unidad de Medida: metros';
} else {
	metricLabel.text = 'Unidad de Medida: imperial';
}

win.add(metricLabel);

var basicSwitch = Ti.UI.createSwitch({
	top : "180dp",
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


