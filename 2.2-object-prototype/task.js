'use strict';

// Задача 1
String.prototype.isPalindrome = function() {
    let str = this;
    str = str.replace(/\s+/g, '');
    let reversedStr = str.split('').reverse().join('');
    reversedStr = reversedStr.replace(/\s+/g, '');

    return str.toUpperCase() === reversedStr.toUpperCase();
}


// Задача 2
function getAverageMark(marks) {
    let marksLength = marks.length;
    let sum = 0;

    if (!marks || marksLength === 0) {
        return 0;
    }

    for (let index = 0; index < marksLength; index++) {
        sum += marks[index];
    }

    const roundedAverage = Math.round(sum / marksLength);

    return roundedAverage;
}

// Задача 3
function checkBirthday(birthday) {
    const now = Date.now();
    birthday = new Date(birthday).getTime();
    const diff = now - birthday;
    const age = diff / (24 * 3600 * 365.25 * 1000);

    return age > 18;
}