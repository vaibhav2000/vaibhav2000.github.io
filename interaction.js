var nameholder=  document.getElementById("nameplace");
var emailholder=  document.getElementById("emailplace");
var msgholder=  document.getElementById("msgplace");
var button = document.getElementById("submitplace");




function servepurpose()
{

  var flag= true;

  if( nameholder.value=="")
   {
     flag= false;
     var curr= $("#nameplace");
  
     curr.popover({
       trigger: 'manual',
       placement: 'bottom',
       content: 'Please Enter a Valid Name' 
     });
   
     curr.popover('show');
   

   }
   
   
   if(emailholder.value=="")
   {flag= false;
   
    var curr= $("#emailplace");
  
  curr.popover({
    trigger: 'manual',
    placement: 'bottom',
    content: 'Please Enter a Valid Email' 
  });

  curr.popover('show');
   }
   
   if(validateEmail(emailholder.value)==false)
     flag= false;

   if(flag==false)  
     return; 


   $('#formholder').collapse('hide');
   $('#sentalert').collapse('show');


   var data = firebase.database().ref().child("stack");

   var member = {
     name: nameholder.value,
     email: emailholder.value,
     message:" "+ msgholder.value
   }

   data.push(member);

}


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}



$("#nameplace").keyup(function(){ 

  var curr= $("#nameplace");
  
  curr.popover({
    trigger: 'manual',
    placement: 'bottom',
    content: 'Please Enter a Valid Name' 
  });

  curr.popover('show');
  
  if(curr.val()!="")
     curr.popover('hide');

   });


$("#emailplace").keyup(function(){ 

  var curr= $("#emailplace");
  
  curr.popover({
    trigger: 'manual',
    placement: 'bottom',
    content: 'Please Enter a Valid Email' 
  });

  curr.popover('show');
  
  if(validateEmail(curr.val()))
     curr.popover('hide');

   });

