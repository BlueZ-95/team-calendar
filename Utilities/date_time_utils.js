export const today = new Date();

export const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

export const currentMonth = months[today.getMonth()];

export const currentDay = weekDays[today.getDay()];

export const currentDate = String(today.getDate()).padStart(2, '0');

export const currentYear = today.getFullYear();

export const currentWeekDays = getCurrentWeekDays();


function getCurrentWeekDays() {

    let currentWeek = [];

    for (let i = 1; i < 7; i++) {
        let first = today.getDate() - today.getDay() + i;
        let day = new Date(today.setDate(first));
        currentWeek.push(day.getDate());
    }

    return currentWeek;
}