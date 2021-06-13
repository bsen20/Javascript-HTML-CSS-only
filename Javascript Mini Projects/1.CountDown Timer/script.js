const newYears = '1 Jan 2022';

const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')


function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSec = (newYearsDate - currentDate)/1000;

    const days = Math.floor((totalSec/3600)/24);
    const hours =  Math.floor(totalSec/3600) % 24; 
    const minutes = Math.floor(totalSec/60)%60; 
    const seconds = Math.floor(totalSec)%60;

    daysElement.innerHTML = formatSingleDigitTime(days);
    hoursElement.innerHTML = formatSingleDigitTime (hours);
    minutesElement.innerHTML = formatSingleDigitTime( minutes);
    secondsElement.innerHTML = formatSingleDigitTime( seconds);


    console.log(days,hours,minutes,seconds);
}

function formatSingleDigitTime(time){
    return time < 10 ? (`0${time}`) : time;
}
//first call
countDown()

setInterval(countDown,1000);