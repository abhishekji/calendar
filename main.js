const calendar = document.getElementById('calendar');
const isWeekend = function(dayName) {
    if ((dayName === 'Sun') || (dayName === 'Sat')) {
        return true;
    }
}
for(let i=1;i <=31; i++) {
    const date = new Date(2020, 5, i);
    const options = {weekday: 'short'};
    const dayName = new Intl.DateTimeFormat('en-us',
    options).format(date);
    calendar.insertAdjacentHTML('beforeend', `<div class="${isWeekend(dayName) ? 'weekend' : ''}"><div>${dayName}</div> ${i} </div>`);
}
        