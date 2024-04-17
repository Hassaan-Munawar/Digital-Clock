var hours = new Date().getHours()
function showtime(){
    var mins = new Date().getMinutes()
    var seconds = new Date().getSeconds()
    if(hours == 13){
        hours = 1;
    }
    else if(hours == 14){
        hours = 2;
        
    }
    else if(hours == 15){
        hours = 3;
        
    }
    else if(hours == 16){
        hours = 4;
        
    }
    else if(hours == 17){
        hours = 5;
        
    }
    else if(hours == 18){
        hours = 6;
        
    }
    else if(hours == 19){
        hours = 7;
        
    }
    else if(hours == 20){
        hours = 8;
        
    }
    else if(hours == 21){
        hours = 9;
        
    }
    else if(hours == 22){
        hours = 10;
        
    }
    else if(hours == 23){
        hours = 11;
        
    }
    else if(hours == 24){
        hours = 12;
        
    }
 
    var time = hours+":"+mins+":"+seconds
    document.getElementById('clock').innerHTML = time
    setTimeout(showtime,1000)
}
showtime()
var pm = "pm"
var am = "am"
if(hours >= 12){
    document.getElementById('sec').innerText= pm
}
else{
    document.getElementById('sec').innerText= am
}