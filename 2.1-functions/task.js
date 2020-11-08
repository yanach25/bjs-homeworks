'use strict';

function getSolutions(a, b, c) {
    const roots = [];
    const D = b ** 2 - 4 * a * c;

    if (D === 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        roots.push(x1);
    } else if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        roots.push(x1, x2);
    }

    return {
        D: D,
        roots: roots,
    };
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    let message = 'Уравнение не имеет вещественных корней';

    if (result.roots.length === 1) {
        message = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
    } else if (result.roots.length > 1) {
        message = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    }

    console.log(message);
}

function getAverageMark(marks) {
    let marksLength = marks.length;
    let sum = 0;

    if (!marks || marksLength === 0) {
        return 0;
    }

    for (let index = 0; index < marksLength; index++) {
        sum += marks[index];
    }

    return sum / marksLength;
}

function getAverageScore(data) {
    const modifiedData = {};
    const lessonsAverage = [];

    for (let key in data) {
        const averageMark = getAverageMark(data[key]);
        modifiedData[key] = averageMark;
        lessonsAverage.push(averageMark);
    }


    modifiedData.average = getAverageMark(lessonsAverage);

    return modifiedData;
}

function getDecodedValue(secret) {
    return secret ? 'Эмильо' : 'Родриго';
}

function getPersonData(secretData) {
    const modifiedData = {};

    for (let key in secretData) {
        const prop = key === 'aaa' ? 'firstName' : 'lastName';
        const value = getDecodedValue(secretData[key]);

        modifiedData[prop] = value;
    }


    return modifiedData;
}