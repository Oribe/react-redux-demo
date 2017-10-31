'strict'

import AppDispatcher from '../AppDispatcher.js'; //将下面的代码注册到AppDispatcher才能发挥作用
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues() {
        return counterValues;
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    }
});

// 注册代码,将CounterStore注册到全局唯一的Dispatcher
CounterStore.dispatcherToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCaption]++;
        CounterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT) {
        counterValues[action.counterCaption]--;
        CounterStore.emitChange();
    }
});

export default CounterStore;