var nameholder=  document.getElementById("nameplace");
var emailholder=  document.getElementById("emailplace");
var msgholder=  document.getElementById("msgplace");
var button = document.getElementById("submitplace");

function servepurpose()
{
  var namestr=nameholder.value;
  var emailstr= emailholder.value;
  var msgstr= msgholder.value;
  
   
  if(namestr=="" || emailstr=="")
    window.alert("Please fill the required fields");
  else
  if(validateEmail(emailstr)==false)
    window.alert("Please enter a valid email ID");
  else  
   {
    if(msgstr=="")
      msgstr="NO_MESSAGE"; 
    
    var data = firebase.database().ref().child("stack");

   var member = {
     name: namestr,
     email: emailstr,
     message:msgstr
   }

   data.push(member);

  document.getElementById("formevade").remove();

var para = document.createElement("p");
var node = document.createTextNode("Thanks for filling up,");
para.appendChild(node);
var node = document.createTextNode("I'll get right back at you in no time.");
para.appendChild(node);
var element = document.getElementById("laterappend");
element.appendChild(para);
   

  }
}


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


window.onscroll = function() {myFunction();
                             myFunction2();};


var header = document.getElementById("NavTab");
var upper = document.getElementById("UpperPart");



function myFunction() {
  if (window.pageYOffset > upper.offsetHeight) {
    header.classList.add("stickproperty");
   
  } else {
    header.classList.remove("stickproperty");
  
  }

}
