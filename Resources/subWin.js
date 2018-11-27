var win = Ti.UI.currentWindow;

var myData = [];
var curr = 0;

Ti.API.info('win.newspapers.length = '+win.newspapers.length);

function addToMyData(myTitle, myDesc, myUrl, dietaImage){

	var row = Ti.UI.createTableViewRow({
		height:'150dp',
		//backgroundColor:'#4F4F4F',
		//hasChild:true,
		myUrl:myUrl,
		sData: myTitle+' '+myDesc
		//receptTitle:myTitle,
	});

	if ( myUrl % 2 == 0)
	{
		row.backgroundColor = '#99CC33';
	} else {
		row.backgroundColor = '#99CC33';
	}
	
	
	var title = Ti.UI.createLabel({
		text:myTitle,
		color:'white',
		height:'auto',
		width:'auto',
		left:'170dp',
		top:'25dp',
		font:{
			fontFamily:'Helvetica Neue',
			fontWeight:'bold',
			fontSize:'14sp'
		}
	});
	row.add(title);
	
	var desc = Ti.UI.createLabel({
		text:myDesc,
		height:'auto',
		width:'auto',
		left:'70dp',
		right:'40dp',
		textAlign:'left',
		top:'25dp',
		color:'white',
		font:{
			fontFamily:'Helvetica Neue',
			fontSize:'12sp'
		}
	});
	row.add(desc);
	
	var dowloadImage = Ti.UI.createImageView({
		image : dietaImage,
		// text:dietaImage,
//		top:'50dp',
		width:'150dp',
		height:'150dp',
		left:0
	});
	row.add(dowloadImage);
	/*
		var dietaImage = Ti.UI.createImageView({
		dietaImage:dietaImage,
		width:'150dp',
		height:'',
		left:0
	});
	row.add(dietaImage);
	*/
	
	var line = Ti.UI.createView({
		height:'1dp',
		width:'100%',
		backgroundColor:'#000',
		bottom:'1dp'
	});
	row.add(line);
	
	var line2 = Ti.UI.createView({
		height:'1dp',
		width:'100%',
		backgroundColor:'#fff',
		bottom:'0dp'
	});
	row.add(line2);
	
	myData[curr] = row;
	curr++;
	
	
}
//Slut på funktionen addToData

var search = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:true,
    height:43,
    top:0,
});

var tableView = Ti.UI.createTableView({
	search: search,
	filterAttribute: 'sData',
	separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
});
win.add(tableView);

tableView.addEventListener('click',function(e){
	
	
	var subWin = Ti.UI.createWindow({
		url: "subWin2.js", 
		backgroundColor:'#99cc66',
		fullscreen: true,
	    exitOnClose: true,
	    keepScreenOn: true,
	    webUrl: e.row.myUrl
		//title:e.rowData.receptTitle,
		//countries:e.rowData.receptURL	
	});
		
	Ti.UI.currentTab.open(subWin);
});
//addToMyData('The Balkan Chronicle','English','Views/list1.js',1);
//addToMyData('The Albanian Sport','English & Albanian','Views/ch02.html',2);

for(i = 0;i < win.newspapers.length;i++)
{
	Ti.API.info('i = '+i);
	Ti.API.info(win.newspapers[i].dietaImage);
	addToMyData(win.newspapers[i].name, "", win.newspapers[i].url, win.newspapers[i].dietaImage);
	
	
}

tableView.data = myData;

//
//


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
