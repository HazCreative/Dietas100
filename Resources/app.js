Titanium.UI.setBackgroundColor();
    
var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
    backgroundImage:'images/background3.png',
    url:'/contact.js',
    navBarHidden:true,
    barColor:'#99cc66',
    fullscreen: false,
    exitOnClose: true,
    keepScreenOn: true, 
    backgroundColor:'#99cc66'    
});

var tab1 = Titanium.UI.createTab({  
    icon:'images/box_icon.png',
    title:'Menu',
    width:'1dp',
    height:'1dp',
    top:290,
    left: 20,
    window:win1
});

var win2 = Titanium.UI.createWindow({  
    title:'Atrás',
	backgroundImage:'images/background3.png',
    url:'/listaDietas.js',
    navBarHidden:true,
    fullscreen: true,
    exitOnClose: true,
    keepScreenOn: true,
    backgroundColor:'#99cc66',
});

var tab2 = Titanium.UI.createTab({  
    icon:'images/dietas.png',
    title:'Dietas',
    width:'3dp',
    height:'3dp',
    top:290,
    left: 20,
    window:win2
});

var win3
 = Titanium.UI.createWindow({  
    title:'Atrás',
	backgroundImage:'images/background2.png',
    url:'/calculo.js',
    fullscreen: true,
    exitOnClose: true,
    keepScreenOn: true,
    navBarHidden:true,
    backgroundColor:'#99cc66'
});

var tab3 = Titanium.UI.createTab({  
    icon:'images/calculos.png',
    title:'Cálculos',
    width:'3dp',
    height:'3dp',
    top:290,
    left: 20,
    window:win3
});

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3); 
//tabGroup.addTab(tab4); 


tabGroup.open();

