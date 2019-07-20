var nameholder=  document.getElementById("nameplace");
var emailholder=  document.getElementById("emailplace");
var msgholder=  document.getElementById("msgplace");
var button = document.getElementById("submitplace");




function servepurpose()
{

   var data = firebase.database().ref().child("stack");

   var member = {
     name: nameholder.value,
     email: emailholder.value,
     message:" "+ msgholder.value
   }

   data.push(member);


}
