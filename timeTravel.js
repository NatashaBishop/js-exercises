/**
 * Function: addWeek
 * -----------------
 * Determines whether the given date falls in an "odd" or "even" week,
 * starting from January 1st of year 0001.
 * 
 * If the week number (difference from day0) is even → returns the weekday name.
 * If odd → returns "second <Weekday>".
 * 
 * Example: If the input date is a Monday in an odd week, returns "second Monday".
 */
function addWeek(date) {
    // Reference point: January 1, year 0001
    let day0 = new Date('0001-01-01');

    /**
     * Helper function: diffDates
     * --------------------------
     * Calculates the difference between two dates in weeks.
     * (Takes the time difference in milliseconds, converts to days, then divides by 7).
     */
    function diffDates(day_one, day_two) {
        return ((day_one - day_two) / (1000 * 60 * 60 * 24)) / 7;
    }

    /**
     * Helper function: getWeekDay
     * ---------------------------
     * Returns the name of the weekday for a given Date object.
     * getDay() returns 0 → Sunday, 1 → Monday, ... 6 → Saturday.
     */
    function getWeekDay(date) {
        let days = [
            'Sunday', 'Monday', 'Tuesday', 
            'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        return days[date.getDay()];
    }

    // Calculate how many weeks have passed between `date` and `day0`, modulo 2
    // → This gives us whether the week is "odd" or "even".
    let diff = diffDates(date, day0) % 2;

    // If the week number is even,
