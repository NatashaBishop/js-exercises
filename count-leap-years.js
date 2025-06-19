// Create a function named countLeapYears which accepts a Date. Your function should return the number of leap years to have taken place since the year 1.

// rules for leap years in the Gregorian calendar: the year is divisible by 4 but not divisible by 100, or if it is divisible by 400, then it is a leap year.

function countLeapYears(date) {
    let years = 0;
    for (let year = 1; year < date.getFullYear(); year++) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            years++;
        }
    }
    return years;
}
