'use strict';

//task 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = type;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type = 'book') {
        super(name, releaseDate, pagesCount, state, type);
        this.type = type;
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = 'novel') {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = type;
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = 'fantastic') {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = type;
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = 'detective') {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = type;
    }
}



// task2
class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const book = this.books.find(currBook => currBook[type] === value);

        return book ? book : null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(currBook => currBook.name === bookName);

        if (index >= 0) {
            const book = this.books[index];
            this.books.splice(index, 1);
            return book;
        } else {
            return null;
        }
    }
}

// task3

class StudentLog {
    _state = {};

    constructor(name) {
        this.name = name;
    }

    _getAverageFromList(list) {
        let sum = 0;
        let average = 0;

        if (list.length > 0) {
            for (let i = 0; i < list.length; i++) {
                sum += list[i];
            }

            average = sum / list.length;
        }

        return average;
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        const grades = this._state[subject] || [];

        if (grade < 1 || grade > 5) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        } else {
            grades.push(grade);
            this._state[subject] = grades;
        }

        return this._state[subject].length;
    }

    getAverageBySubject(subject) {
        const grades = this._state[subject] || [];

        return this._getAverageFromList(grades);
    }

    getTotalAverage() {
        const avereges = [];

        for (let key in this._state) {
            avereges.push(this.getAverageBySubject(key));
        }

        return this._getAverageFromList(avereges);
    }
}