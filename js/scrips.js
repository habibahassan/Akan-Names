function validaymyday() {
  var day = document.getElementById("day").value;
  if ((day <= 0) || (day > 31)) {
    alert("Error!!! please enter correct day");
  }
}
function validaymymonth() {
  var month = document.getElementById("month").value;
  
  if ((month <= 0) || (month > 12)) {
      alert("Error!!! please enter correct month");
  }
}
function validaymycentury() {
  var centuary = document.getElementById("century").value;
  
  if ((centuary <= 0) || (centuary > 99)){

      alert("Error!!! please enter correct century");
  }
}
function validaymyyear() {
  var year = document.getElementById("year").value;
  
  if ((year <= 0) || (year > 99)){
      alert("Error!!! please enter correct Year");
  }
   
}
function getakanname() {
  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById("year").value;
  var century = document.getElementById("century").value;
  var gender;
  var detail = document.getElementsByName('gender');

  for (i = 0; i < detail.length; i++) {
    if (detail[i].checked)
      gender = detail[i].value;
  }
 
  var Weekday= (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;

  
  var femaleArray = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  var maleArray = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (gender == "male") {
    var xy = "Your Akan Name is: " + maleArray[Math.floor(Weekday)] + "  and Day of the week is: " + daysArray[Math.floor(Weekday)];
    document.getElementById("outAkan").innerHTML = xy;
    
  }
  else {
    var xy = "Your Akan Name is: " + femaleArray[Math.floor(Weekday)] + "  and Day of the week is: " + daysArray[Math.floor(Weekday)];
    document.getElementById("outAkan").innerHTML = xy;
    
  }
 
}