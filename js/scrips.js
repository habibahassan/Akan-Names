
  function validatemydate() {
    var date = document.getElementById("date").value;
   
    if ((date <= 0) || (date > 31)) {
      
    }
  }
  function validatemymonth() {
    var month = document.getElementsById("month").value;
    
    if ((month <= 0) || (month > 12)) {
      
    }
  }
  function validatemycentuary() {
    var centuary = document.getElementsById("Centuary").value;
    
    if ((centuary <= 0) || (centuary > 99));
  }
  function validatemyyear() {
    var year = document.getElementsById("year").value;
    
    if ((year <= 0) || (year > 99));
     
  }
  function getakanname() {
    var date = document.getElementsById('date').value;
    var month = document.getElementsById('month').value;
    var year = document.getElementsById("year").value;
    var century = document.getElementsById("Centuary").value;
    var gender;
    var detail = document.getElementsByName('gender');
  
    for (i = 0; i < detail.length; i++) {
      if (detail[i].checked)
        gender = detail[i].value;
    }
   
    var Weekday= (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
  
    
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (gender == "male") {
      var xy = " " + male[Math.floor(Weekday)] + "   :: " + days[Math.floor(Weekday)];
      document.getElementsByName("name").innerHTML = xy;
      
    }
    else {
      var xy = " " + female[Math.floor(Weekday)] + "    :: " + days[Math.floor(Weekday)];
      document.getElementsByName("name").innerHTML = xy;
      
    }
  }
  
  
