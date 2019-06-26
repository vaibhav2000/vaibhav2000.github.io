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
