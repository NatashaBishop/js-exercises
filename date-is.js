


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
