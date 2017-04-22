var cvd = require('cardVendorDetails');

var cv = tabris.ui.contentView;

var navView = new tabris.NavigationView({toolbarColor:'green', toolbarVisible:false,  left:0,right:0,top:0,bottom:0}).appendTo(cv);
var signInPage = new tabris.Page().appendTo(navView);
var welcometext = new tabris.Button({centerX:0, centerY:0, text:'Card Vendor Dashboard'}).appendTo(signInPage);
welcometext.on('tap', goToNextPage);

function goToNextPage(){
  cvd.launch(navView, 'Mayura Cards');
}


console.log('Test Me');
