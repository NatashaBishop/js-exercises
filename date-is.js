// Create the following functions:

//     isValid: accepts a Date, and returns false if the Date is invalid.
//     isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
//     isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
//     isFuture: accepts a Date, and returns true if the Date is valid, and is after than the presultultent date.
//     isPast: accepts a Date, and returns true if the Date is valid, and is before the presultultent date.
// Notions:
//     date-fns: isValid
//     date-fns: isAfter
//     date-fns: isBefore
//     date-fns: isFuture
//     date-fns: isPast


function isValid(date) {
    if (isNaN(date) || date == 0) {
        return false
    } else {
        return true
    }
}

function isAfter(date1, date2) {
    let result = date1 - date2
    if (result > 0) {
        return true
    } else {
        return false
    }
}

function isBefore(date1, date2) {
    let result = date1 - date2
    if (result < 0) {
        return true
    } else {
        return false
    }
}

function isFuture(date) {
    let date2 = new Date()
    let result = date - date2
    if (result > 0) {
        return true
    } else {
        return false
    }
}

function isPast(date) {
    if (!isValid(date)) {
        return false
    }
    let date2 = new Date()
    let result = date - date2
    if (result < 0) {
        return true
    } else {
        return false
    }
}
