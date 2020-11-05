'use strict';


function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(percent)) {
        return `Параметр percent содержит неправильное значение ${percent}`;
    }
    if (isNaN(contribution)) {
        return `Параметр contribution содержит неправильное значение ${contribution}`;
    }
    if (isNaN(amount)) {
        return `Параметр amount содержит неправильное значение ${amount}`;
    }

    const amontWithoutContrubution = amount - contribution;

    const currentDate = new Date();
    const initDate = new Date(date);
    const d1Y = initDate.getFullYear();
    const d2Y = currentDate.getFullYear();
    const d1M = initDate.getMonth();
    const d2M = currentDate.getMonth();
    const monthDifference = (d1M + 12 * d1Y) - (d2M + 12 * d2Y);

    const p = percent / 12 / 100;
    const payment = amontWithoutContrubution * (p + p / (((1 + p) ** monthDifference) - 1));
    const totalAmount = payment * monthDifference;
    const fixedTotalAmount = totalAmount.toFixed(2);

    console.log(fixedTotalAmount);
    return +fixedTotalAmount;
}

function getGreeting(name) {
    return (!name) ?
        `Привет, мир! Меня зовут Аноним.` :
        `Привет, мир! Меня зовут ${name}.`;
}