function gh() {
    var month = document.getElementById("month")
    var MM = parseInt(month);
    var day = document.getElementById("day").Value;
    var DD = parseInt(day);
    var year = document.getElementById("year").Value;
    var YY = parseInt(year);
    var century = document.getElementById("century")
    var CC = parseInt(century);
}
var maleNames =[
    "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNmes = [
    "Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
 var day = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
 day = Math.round(day);

 if (MM < 1 || MM > 12 || MM == 2 && DD > 29) {
    alert("INVALID MONTH!!!");
}

if (document.getElementById("male").checked) {
    alert("Your Akan name is " + maleNames[day - 1]);
}
else if (document.getElementById("female").checked) {
    alert("Your Akan name is " + femaleNames[day - 1]);
}