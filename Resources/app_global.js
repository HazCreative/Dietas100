
var OS_is_Android = Ti.Platform.osname == "android";

var OS_is_iOS = !OS_is_Android;

var is_iOS7 = (parseInt(Ti.Platform.version) >= 7 && OS_is_iOS);

var ScreenIsLowDpi = Ti.Platform.displayCaps.density == 'low';


function logg(msg){
	Ti.API.info(msg);
}

// left: '55dp'
// left: '55dp66dp'

// left: dp(55)
// left: dp(55) + dp(66);
//funktion för att räkna om dp till faktiska pixlar (android)
function dp(DPUnits) {
	if (DPUnits == null){
		return null;
	}
	if (DPUnits.toString().search('%') >= 0){
		return DPUnits;
	}

	if (DPUnits.toString().indexOf("dp") > 0) {
		DPUnits = getValueFromDPUnits(DPUnits);
	};
	if (OS_is_Android) {
		Pixels = (DPUnits * (Titanium.Platform.displayCaps.dpi / 160));
		// logg("DPUnitsToPixels (Android)>> '"+DPUnits+"dp' = "+Pixels+"px");
	} else {
		Pixels = DPUnits;
		// logg("DPUnitsToPixels (iOS) >> '"+DPUnits+"dp' = "+Pixels+"px");
	};
	return Pixels;
}

//
//funktion som gör att man kan räkna med värden angivna i "dp" (även i string med formattering, ex: "10dp")
//	konverterar till integer: px
function getValueFromDPUnits(dp_value) {
	dp_value.slice(1, dp_value.length - 3);
	// logg('getValueFromDPUnits >> '+parseInt(dp_value));
	return parseInt(dp_value);
}

function devColor(theObject, theColor, isOn){
	if (isOn !== undefined){
		if (!isOn){
			logg('devColor >> isOn = false');
			return;
		}
	}
	// if (!debugMode){
		// logg('devColor() debugMode = false');
		// return;
	// }
	if (theColor === undefined){
		logg('devColor() theColor is undefined');
		theColor = 'random';
	}
	if (theColor == 'random'){
		logg('devColor() theColor is random');
		theColor = Math.floor(Math.random()*16777215).toString(16);
		if (theColor.length<6){
			theColor = '0' + theColor;
		}
		theColor='#'+theColor;
	}
	logg('theColor = ' + theColor);
	theObject.backgroundColor = theColor;
	theObject.opacity = 0.5;
}
