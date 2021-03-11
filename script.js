//need ending date, current date, add and subtract

const daysM = document.getElementById('days');
const hoursM = document.getElementById('hours');
const minsM = document.getElementById('mins');
const secondsM = document.getElementById('secs');


const marriage = "3 Apr 2021";

function countdown() {
				const marriageDate = new Date(marriage);
				const currentDate = new Date();
				
				console.log(marriageDate);
				console.log(currentDate);

				
		    const totalSeconds = (marriageDate - currentDate) / 1000;  
				const days = Math.floor(totalSeconds / 3600 / 24);
				const hours =  Math.floor(totalSeconds / 3600) % 24;
				const mins = Math.floor(totalSeconds / 60) % 60;
				const secs = Math.floor(totalSeconds) % 60; 

 daysM.innerHTML = days;
 hoursM.innerHTML = formatTime(hours);
 minsM.innerHTML = formatTime(mins);
 secondsM.innerHTML = formatTime(secs);


				
}

function formatTime(time) {
				return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
