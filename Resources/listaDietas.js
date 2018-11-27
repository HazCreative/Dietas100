var win = Ti.UI.currentWindow;

var myData = [];
var curr = 0;

function addToMyData(countrynumber, myImage, myTitle, myDesc, dietaImage){
	
	var row = Ti.UI.createTableViewRow({
		height:'350dp',
		countrynumber: countrynumber,
		sData: myTitle+' '+myDesc
	});
	
	if (countrynumber % 2 == 0)
	{
		row.backgroundColor = '#99CC33';
	} else {
		row.backgroundColor = '#99CC33';
	}
	
	var image = Ti.UI.createImageView({
		image:myImage,
		width:'100%',
		height:'350dp',
		left:0
	});
	
	row.add(image);
	
	var dietaImage = Ti.UI.createImageView({
		dietaImage:dietaImage,
		width:'30dp',
		height:'30dp',
		left:0
	});
	row.add(dietaImage);

	var shade = Ti.UI.createView({
		height:'100dp',
		width:'100%',
		top: '20dp',
		backgroundColor:'#729625',
		opacity: 0.7
	});
	row.add(shade);
	
	var title = Ti.UI.createLabel({
		text:myTitle,
		font : {
			fontSize : 22,
			fontWeight : 'bold'
			},
			shadowColor : '#729625',
			shadowOffset : {
				x : 1,
				y : 2
			},
		height:'auto',
		width:'auto',
		left:'70dp',
		top:'25dp',
		color:'white'
	
	});
	row.add(title);
	
	var desc = Ti.UI.createLabel({
		text:myDesc,
		height:'auto',
		width:'auto',
		left:'70dp',
		right:'40dp',
		textAlign:'left',
		top:'85dp',
		color:'white',
		font:{
			fontFamily:'Helvetica Neue',
			fontSize:'18sp'
		}
	});
	row.add(desc);
	
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
	Ti.API.info('e.row.countrynumber = '+e.row.countrynumber);
	var subWin = Ti.UI.createWindow({
		
		url:'subWin.js',
		fullscreen: true,
	    exitOnClose: true,
	    keepScreenOn: true,
		backgroundColor:'#4F4F4F',
		search: search,
		newspapers: countries[e.row.countrynumber]["newspapers"]		
	});
	Ti.UI.currentTab.open(subWin);
});

//function addToMyData(countrynumber, myImage, myTitle, myDesc,dietaImage)

var countries = [];

countries[0] = [];
countries[0]["CountryName"] = "DIETAS DE FRUTAS";
countries[0]["CountryImage"] = "/images/a/0.png";
countries[0]["newspapers"] = [];
countries[0]["newspapers"][0] = {name: "ADELGAZAR CON LA DIETA DE LA MANZANA" ,url: "Views/ch01.html", dietaImage: "/images/a/manzanas.png"};
countries[0]["newspapers"][1] = {name: "CHOQUE DE LA PIÑA", url: "Views/ch02.html", dietaImage: "/images/a/pina.png"};
countries[0]["newspapers"][2] = {name: "DIETA DE ARROZ Y FRUTA", url: "Views/ch03.html", dietaImage: "/images/a/frutas.png"};
countries[0]["newspapers"][3] = {name: "DIETA DE CIRUELAS Y PERAS", url: "Views/ch04.html", dietaImage: "/images/a/peras.png"};
countries[0]["newspapers"][4] = {name: "DIETA DE LA FRESA", url: "Views/ch05.html", dietaImage: "/images/a/fresas.png"};
countries[0]["newspapers"][5] = {name: "DIETA DE LA FRUTA", url: "Views/ch06.html", dietaImage: "/images/a/pina1.png"};
countries[0]["newspapers"][6] = {name: "DIETA DE LA NARANJA", url: "Views/ch07.html", dietaImage: "/images/a/naranja.png"};
countries[0]["newspapers"][7] = {name: "DIETA DE LA PAPAYA", url: "Views/ch08.html", dietaImage: "/images/a/aguacate.png"};
countries[0]["newspapers"][8] = {name: "DIETA DE LA PIÑA", url: "Views/ch09.html", dietaImage: "/images/a/pina2.png"};
countries[0]["newspapers"][9] = {name: "DIETA DE LA REMOLACHA", url: "Views/ch10.html", dietaImage: "/images/a/rabanos.png"};
countries[0]["newspapers"][10] = {name: "DIETA DE LA SANDÍA", url: "Views/ch11.html", dietaImage: "/images/a/sandia.png"};


countries[1] = [];
countries[1]["CountryName"] = "DIETAS FAMOSAS";
countries[1]["CountryImage"] = "/images/b/1.png";
countries[1]["newspapers"] = [];
countries[1]["newspapers"][0] = {name: "DIETA 911", url: "Views/ch12.html", dietaImage: "/images/a/soya.png"};
countries[1]["newspapers"][1] = {name: "LA DIETA CETOGÉNICA", url: "Views/ch13.html", dietaImage: "/images/a/tomatoes.png"};
countries[1]["newspapers"][2] = {name: "DIETA ATKINS", url: "Views/ch14.html", dietaImage: "/images/a/proteinas.png"};
countries[1]["newspapers"][3] = {name: "DIETA BRONCEADORA", url: "Views/ch15.html", dietaImage: "/images/a/zanahoria.png"};


countries[2] = [];
countries[2]["CountryName"] = "DIETAS MEDICINALES";
countries[2]["CountryImage"] = "/images/c/2.png";
countries[2]["newspapers"] = [];
countries[2]["newspapers"][0] = {name: "DIETA DE LAS PROTEÍNAS", url: "Views/ch16.html", dietaImage: "/images/a/proteinas.png"};
countries[2]["newspapers"][1] = {name: "DIETA PARA DIABÉTICOS", url: "Views/ch17.html", dietaImage: "/images/a/veg.png"};
countries[2]["newspapers"][2] = {name: "DIETA PARA DIABÉTICOS II", url: "Views/ch18.html", dietaImage: "/images/a/pasta.png"};
countries[2]["newspapers"][3] = {name: "DIETA PARA EL CUIDADO DEL PELO", url: "Views/ch19.html", dietaImage: "/images/a/citricos.png"};


countries[3] = [];
countries[3]["CountryName"] = "DIETAS MEDITERRÁNEAS";
countries[3]["CountryImage"] = "/images/d/3.png";
countries[3]["newspapers"] = [];
countries[3]["newspapers"][0] = {name: "DIETA DEL VERANO", url: "Views/ch20.html", dietaImage: "/images/a/griego.png"};
countries[3]["newspapers"][1] = {name: "DIETA DEL ESPÁRRAGO", url: "Views/ch21.html", dietaImage: "/images/a/esparragos.png"};
countries[3]["newspapers"][2] = {name: "DIETA MEDITERRÁNEA EQUILIBRADA", url: "Views/ch22.html", dietaImage: "/images/a/vegetales.png"};
countries[3]["newspapers"][3] = {name: "DIETA NATURAL", url: "Views/ch23.html", dietaImage: "/images/a/vegetales2.png"};



countries[4] = [];
countries[4]["CountryName"] = "DIETAS ORIENTALES";
countries[4]["CountryImage"] = "/images/e/4.png";
countries[4]["newspapers"] = [];
countries[4]["newspapers"][0] = {name: "DIETA CHINA", url: "Views/ch24.html", dietaImage: "/images/a/salmon.png"};
countries[4]["newspapers"][1] = {name: "DIETA DE LA SOJA", url: "Views/ch25.html", dietaImage: "/images/a/soya.png"};
countries[4]["newspapers"][2] = {name: "DIETA TAOÍSTA", url: "Views/ch26.html", dietaImage: "/images/a/vegetariano.png"};

countries[5] = [];
countries[5]["CountryName"] = "DIETAS PARA SUBIR PESO";
countries[5]["CountryImage"] = "/images/f/5.png";
countries[5]["newspapers"] = [];
countries[5]["newspapers"][0] = {name: "DIETA DE 2.500 CALORÍAS", url: "Views/ch27.html", dietaImage: "/images/a/proteinas.png"};
countries[5]["newspapers"][1] = {name: "DIETA DEL CULTURISMO", url: "Views/ch28.html", dietaImage: "/images/a/veg.png"};
countries[5]["newspapers"][2] = {name: "DIETA PARA AUMENTAR MASA MUSCULAR", url: "Views/ch29.html", dietaImage: "/images/a/pasta.png"};
countries[5]["newspapers"][3] = {name: "DIETA PARA SUBIR DE PESO SALUDABLEMENTE", url: "Views/ch30.html", dietaImage: "/images/a/pollo.png"};


countries[6] = [];
countries[6]["CountryName"] = "DIETAS PARA VEGETARIANOS";
countries[6]["CountryImage"] = "/images/g/6.png";
countries[6]["newspapers"] = [];
countries[6]["newspapers"][0] = {name: "DIETA CRUDÍVORA", url: "Views/ch31.html", dietaImage: "/images/a/veg.png"};
countries[6]["newspapers"][1] = {name: "DIETA DE ELIMINACIÓN", url: "Views/ch32.html", dietaImage: "/images/a/vegetariano.png"};
countries[6]["newspapers"][2] = {name: "DIETA NATURISTA", url: "Views/ch33.html", dietaImage: "/images/a/vegetales2.png"};


countries[7] = [];
countries[7]["CountryName"] = "DIETAS RÁPIDAS";
countries[7]["CountryImage"] = "/images/h/7.png";
countries[7]["newspapers"] = [];
countries[7]["newspapers"][0] = {name: "DIETA CARRERA", url: "Views/ch34.html", dietaImage: "/images/a/proteinas.png"};
countries[7]["newspapers"][1] = {name: "DIETA DE LOS 10 DÍAS", url: "Views/ch35.html", dietaImage: "/images/a/pollo.png"};
countries[7]["newspapers"][2] = {name: "DIETA DE EMERGENCIA", url: "Views/ch36.html", dietaImage: "/images/a/veg.png"};
countries[7]["newspapers"][3] = {name: "DIETA DE LA FELICIDAD", url: "Views/ch37.html", dietaImage: "/images/a/soya.png"};


countries[8] = [];
countries[8]["CountryName"] = "DIETAS TRADICIONALES";
countries[8]["CountryImage"] = "/images/i/8.png";
countries[8]["newspapers"] = [];
countries[8]["newspapers"][0] = {name: "DIETA DE LA ALCACHOFA", url: "Views/ch38.html", dietaImage: "/images/a/alcachofa.png"};
countries[8]["newspapers"][1] = {name: "DIETA DEPURATIVA", url: "Views/ch39.html", dietaImage: "/images/a/lechuga.png"};
countries[8]["newspapers"][2] = {name: "DIETA EN PAREJA", url: "Views/ch40.html", dietaImage: "/images/a/aguacate.png"};


for(i = 0;i < countries.length; i++)
{
	addToMyData(i, countries[i]["CountryImage"], countries[i]["CountryName"], countries[i]["newspapers"].length+" Dietas");
}
//El titulo "dietas" reemplaza a el anterior titulo Newspaper con N mayuscula que era un titulo nada mas.

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

