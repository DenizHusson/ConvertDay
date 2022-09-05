
const yearToDay = 365;
const dayToHour = 24;
const hourToMinute = 60;
const minuteToSecond = 60;

//=========================================

const dayToYear = 365;
const hourToDay = 24;
const minuteToHour = 60;
const secondToMinute = 60;

//=========================================

const yearInput = document.querySelector('#year-input');
const dayInput = document.querySelector('#day-input');
const hourInput = document.querySelector('#hour-input');
const minuteInput = document.querySelector('#minute-input');
const secondInput = document.querySelector('#second-input');

//=========================================

const calculateYears = document.querySelector('#calculate-years');
const calculateDays = document.querySelector('#calculate-days');
const calculateHours = document.querySelector('#calculate-hours');
const calculateMinutes = document.querySelector('#calculate-minutes');
const calculateSeconds = document.querySelector('#calculate-seconds');

//=========================================

const year = document.querySelector('#years');
const day = document.querySelector('#days');
const hour = document.querySelector('#hours');
const minute = document.querySelector('#minutes');
const second = document.querySelector('#seconds');

//==========================================
console.log(calculateYears)
calculateYears?.addEventListener('click', () => {
    let years = yearInput.value;
    console.log(years)
    let calculateDay = years * yearToDay;
    let calculateHour = calculateDay * dayToHour;
    let calculateMinute = calculateHour * hourToMinute;
    let calculateSecond = calculateMinute * minuteToSecond;

    //======================================

    year.innerText = `${years} years`;
    day.innerText = `${calculateDay} days`;
    hour.innerText = `${calculateHour} hours`;
    minute.innerText = `${calculateMinute} minutes`;
    second.innerText = `${calculateSecond} seconds`;

});

calculateDays?.addEventListener('click', () => {
    let days = dayInput.value;
    let calculateYear = days / dayToYear;
    let calculateHour = days * dayToHour;
    let calculateMinute = calculateHour * hourToMinute;
    let calculateSecond = calculateMinute * minuteToSecond;

    //======================================

    year.innerText = `${calculateYear} years`;
    day.innerText = `${days} years`;
    hour.innerText = `${calculateHour} years`;
    minute.innerText = `${calculateMinute} years`;
    second.innerText = `${calculateSecond} years`;

});

calculateHours?.addEventListener('click', () => {
    let hours = hourInput.value;
    let calculateMinute = hours * hourToMinute;
    let calculateSecond = calculateMinute * minuteToSecond;
    let calculateDay = hourToDay / hours;
    let calculateYear = calculateDay / dayToYear;
    
    //======================================

    year.innerText = `${calculateYear} years`;
    day.innerText = `${calculateDay} years`;
    hour.innerText = `${hours} years`;
    minute.innerText = `${calculateMinute} years`;
    second.innerText = `${calculateSecond} years`;

});

calculateMinutes?.addEventListener('click', () => {
    let minutes = minuteInput.value;
    let calculateSecond = minutes * minuteToSecond;
    let calculateHour = minuteToHour / minutes;
    let calculateDay = hourToDay / calculateHour;
    let calculateYear = calculateDay / dayToYear;
    
    //======================================

    year.innerText = `${calculateYear} years`;
    day.innerText = `${calculateDay} years`;
    hour.innerText = `${calculateHour} years`;
    minute.innerText = `${minutes} years`;
    second.innerText = `${calculateSecond} years`;

});

calculateSeconds?.addEventListener('click', () => {
    let seconds = secondInput.value;
    let calculateMinute = secondToMinute / seconds;
    let calculateHour = minuteToHour / calculateMinute;
    let calculateDay = hourToDay / calculateHour;
    let calculateYear = calculateDay / dayToYear;
    
    //======================================

    year.innerText = `${calculateYear} years`;
    day.innerText = `${calculateDay} years`;
    hour.innerText = `${calculateHour} years`;
    minute.innerText = `${calculateMinute} years`;
    second.innerText = `${seconds} years`;

});
