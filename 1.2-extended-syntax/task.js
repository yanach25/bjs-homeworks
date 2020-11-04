'use strict';

function getResult(a, b, c) {
    let arrayX;
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    console.log(discriminant)
    if (discriminant < 0) {
        arrayX = [];
    } else if (discriminant === 0) {
        arrayX = [(-b + Math.sqrt(discriminant)) / (2 * a)];
    } else {
        arrayX = [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }

    return arrayX;
}

function getAverageMark(marks) {
    console.log(marks);
    let marksLength = marks.length;
    let sum = 0;

    if (!marks || marksLength === 0) {
        return 0;
    }

    if (marksLength > 5) {
        console.log('Оценок больше 5');
        marks.length = 5;
        marksLength = marks.length;
    }

    for (let index = 0; index < marksLength; index++) {
        sum += marks[index];
    }
    return sum / marksLength;
}

function askDrink(name, dateOfBirthday) {
    const currentYear = new Date().getFullYear();
    const usersYearOfBirthday = new Date(dateOfBirthday).getFullYear();

    return currentYear - usersYearOfBirthday > 18 ?
        `Не желаете ли олд-фэшн, ${name}?` :
        `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}