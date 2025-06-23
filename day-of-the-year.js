// Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.
// Re: 24 * 60 * 60 * 1000
// The result of the subtraction is divided by the total number of milliseconds in a day (24 * 60 * 60 * 1000) to get the number of days between date and firstDayOfYear.


function dayOfTheYear(date) {
let firstDayOfYear = new Date(date)

    firstDayOfYear.setDate(1) //set the day of the month to the first day of the year
    firstDayOfYear.setMonth(0) //set the month to January - in JS months r starting from 0
        
        // using date.getTime() and firstDayOfYear.getTime() to get data in milliseconds
        // 1+ is added to the calculated number of days to get the day of the year, 
        // because day of the year is day 1
    return 1 + Math.round((date.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000))
} //math is rounding number of days to the nearest integer
