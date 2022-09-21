import {makeAutoObservable, makeObservable} from 'mobx';

class Counter {
    startValue = 5;
    maxValue = 10;
    incValue = ''

    constructor() {
        makeAutoObservable(this)
    }

    setStartValue(value) {
        this.startValue = value
    }

    setMaxValue(value) {
        this.maxValue = value
    }

    setValue() {
        this.incValue = this.startValue
    }

    increment() {
        this.incValue = Number(this.incValue) + 1
    }
}

export default new Counter