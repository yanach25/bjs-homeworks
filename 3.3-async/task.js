'use strict';

class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не прередан');
        }

        const some = this.alarmCollection.some(alarm => alarm.id === id);

        if (some) {
            console.error('Будильник с таким id уже существует');

            return;
        }

        this.alarmCollection.push({
            id,
            time,
            callback,
        });
    }

    removeClock(id) {
        const alarmCollection = [...this.alarmCollection];
        this.alarmCollection = alarmCollection.filter(alarm => alarm.id !== id);

        return alarmCollection.length === this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        const now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();

        if (hour < 10) {
            hour = `0${hour}`;
        }

        if (minute < 10) {
            minute = `0${minute}`;
        }

        return `${hour}:${minute}`;
    }

    checkClock(call) {
        if (call.time === this.getCurrentFormattedTime()) {
            call.callback();
        }
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                    this.checkClock(alarm);
                })
            }, 1000)
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(alarm => {
            console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`);
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();

    phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);
    phoneAlarm.addClock('09:01', () => { console.log('Давай, вставай уже!');
        phoneAlarm.removeClock(2) }, 2);
    phoneAlarm.addClock('09:01', () => console.log('Иди умываться!'));

    phoneAlarm.addClock('09:02', () => {
        console.log('Вставай, а то проспишь!');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);

    phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь!'), 1);

    phoneAlarm.printAlarms();

    phoneAlarm.start();
}

testCase();