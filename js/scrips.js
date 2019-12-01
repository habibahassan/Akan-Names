var century, year, month, dayOfMonth, dayOfWeek, day;
function getInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthday").value);


    if(century == ""){
        alert("Input the correct gender");
        return false;
    }else if (year == ""){
        alert("Input the correct year");
        return false;
    }else if (month == ""){
        alert("Input the correct month");
        return false;
