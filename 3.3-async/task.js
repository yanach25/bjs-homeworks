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