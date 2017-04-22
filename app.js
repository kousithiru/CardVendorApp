var cv = tabris.ui.contentView;

var navigation = new tabris.NavigationView({top:0,left:0, right:0,bottom:0}).appendTo(cv);

var page = new tabris.Page({title:'Card vendors'}).appendTo(navigation);
  var comp1 = new tabris.Composite({left:110, right:10, top:150, height:60}).appendTo(page);
  var textView1 = new tabris.TextView({alignment:'center'}).appendTo(comp1);
  textView1.text = 'Welcome';
  textView1.font = '35px';
  textView1.centre =100;
  page.background = 'rgb(153,0,76)';
  textView1.textColor = 'rgb(255,255,255)';

  var comp2 = new tabris.Composite({left:150, right:10, top:200, height:100}).appendTo(page);
  var textView2 = new
  tabris.TextView({alignment:'center'}).appendTo(comp2);
  textView2.text = 'Invytz';
  textView2.font = '25px';
  textView2.centre =100;
  textView2.textColor = 'rgb(255,255,255)';
      
var comp3 = new tabris.Composite({left:50, right:10, top:270, height:140}).appendTo(page);
  var textView3 = new
  tabris.TextView({alignment:'center'}).appendTo(comp3);
  textView3.text = 'User ID';
  textView3.font = '20px';
  textView3.centre =100;
  textView3.textColor = 'rgb(255,255,255)';

var comp4 = new tabris.Composite({left:50, right:10, top:320, height:220}).appendTo(page);
  var textView4 = new
  tabris.TextView({alignment:'center'}).appendTo(comp4);
  textView4.text = 'Password';
  textView4.font = '20px';
  textView4.centre =100;
  textView4.textColor = 'rgb(255,255,255)';

   
var button2 = new tabris.Button().appendTo(page);
button2.text = 'Sign In';
button2.font = '20px';
button2.background = 'rgb(0,0,0)';
button2.textColor = 'rgb(255,255,255)';
button2.centerX = 0;
button2.centerY = 140;
 button2.on('select', goToNextPage);


var button = new tabris.Button().appendTo(page);
button.layoutData = {left:170, right:50, top:260, width:130};
button.background = 'rgb (255,255,255)';
button.font = '20px';
button.textColor = 'rgb(255,255,255)';


var button1 = new tabris.Button().appendTo(page);
button1.layoutData = {left:170, right:50, top:310, width:130};
button1.background = 'rgb (255,255,255)';
button1.font = '20px';
button1.textColor = 'rgb(255,255,255)';

function goToNextPage(){
  var page2 = new tabris.Page({title:'Counting'}).appendTo(navigation);

  var comp5 = new tabris.Composite({left:80, right:10, top:150, height:60}).appendTo(page2);
  var textView5 = new tabris.TextView({alignment:'center'}).appendTo(comp5);
  textView5.text = 'Mayura cards';
  textView5.font = '30px';
  textView5.centre =100;
  page2.background = 'rgb(153,0,76)';
  textView5.textColor = 'rgb(255,255,255)';

var comp6 = new tabris.Composite({left:50, right:10, top:280, height:140}).appendTo(page2);
  var textView6 = new tabris.TextView({alignment:'center'}).appendTo(comp6);
  textView6.text = 'Total Events';
  textView6.font = '20px';
  textView6.centre =100;
  textView6.textColor = 'rgb(255,255,255)';
  
  var comp7 = new tabris.Composite({left:50, right:10, top:350, height:200}).appendTo(page2);
  var textView7 = new tabris.TextView({alignment:'center'}).appendTo(comp7);
  textView7.text = 'Total Reach';
  textView7.font = '20px';
  textView7.centre =100;
  textView7.textColor = 'rgb(255,255,255)';
  
  var button3 = new tabris.Button().appendTo(page2);
button3.background = 'rgb (255,255,255)';
button3.font = '20px';
button3.textColor = 'rgb(255,255,255)';
button3.centerX = 60;
button3.centerY = 10;
  
  var button4 = new tabris.Button().appendTo(page2);
button4.background = 'rgb (255,255,255)';
button4.font = '20px';
button4.textColor = 'rgb(255,255,255)';
button4.centerX = 60;
button4.centerY = 85;
  
}
