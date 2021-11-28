//variables :
let inputName = document.getElementById('inputName');
let btn = document.getElementById('button');
let userName = document.getElementById('name');

//Event listeners :
btn.addEventListener('click', (e) => {
    if(userName.style.display === "none" || userName.innerHTML){
        userName.innerHTML = "";
        let text = document.createTextNode (inputName.value);
        console.log(text);
        userName.appendChild(text);
        userName.style.display = "block";
    }
})

// Dark theme :
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

//New year Count-down
function timeLeft(){
    var t = Date.parse('01 Jan 2022 00:00:00 GMT') - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
};

let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let mins = document.querySelector(".mins")
let secs = document.querySelector(".secs")
console.log(days)

setInterval(() => {
    let obj = timeLeft();
    days.innerHTML = obj.days;
    secs.innerHTML = obj.seconds;
    mins.innerHTML = obj.minutes;
    hours.innerHTML = obj.hours;
}, 1000);

console.log(new Date())



//Page transition :
let transPage = document.getElementById("page");
let magicClock = document.querySelector('.magicClock')
let magicText = document.querySelector('.magicText')
console.log(transPage)

magicClock.addEventListener('click', () => {
        transPage.style.animation= "slider 4s ease-in-out 1";
        setTimeout(() => {
        transPage.style.display = "none";
        }, 4000);
        setTimeout(() => {
        magicClock.style.display = "none";
        magicText.style.display = "none";
        }, 3000);
})





