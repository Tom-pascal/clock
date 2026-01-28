
function updatestime(){

let date = new Date();

let hour = date.getHours()
let min = date.getMinutes().toString().padStart(2,0)
let secs = date.getSeconds().toString().padStart(2,0)
let meridiem = hour >= 12 ? "PM": "AM" ;
hour = hour % 12 || 12;
hour = hour.toString().padStart(2,0);

let time = `${hour}:${min}:${secs}${meridiem}`
document.getElementById("clock").textContent= time;


}

updatestime()
setInterval(updatestime,1000);