function checklength(tempInput) {
  if (tempInput.value.length > 5) {
    alert(`Your ticket is booked,Thank you! ${tempInput.value}`);
  }else if(tempInput.value=null){
    alert(`Please put your details`);
  }else if(tempInput.value.length < 5){
    alert(`Username need more than 5 letters!`);
  }
}


function display() {
    if(document.getElementById('roundtrip').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("roundtrip").value
            + " Roundtrip";
    }
    else if(document.getElementById('oneway').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("oneway").value
            + "One Way";
    }
    else if(document.getElementById('multycity').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("multycity").value
            + "Multy-City";
    }
    else {
        document.getElementById("disp").innerHTML
            = "No one selected";
    }

    
}


// If the length of the element's string is 0 then display helper message 
let inputtx = document.getElementById('flyform');
function flyfor(inputtx) 
{
  if (inputtx.value.length == 0)
   { 
      alert("Your Flying city is empty");  	
      return false; 
   }  	
   return true; 
 } 

let phontnumber = document.getElementById('phontnumber')
 function phonenum(phontnumber)
{
  var phoneno = /^\d{10}$/;
  if(phontnumber.value.match(phoneno))
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }
