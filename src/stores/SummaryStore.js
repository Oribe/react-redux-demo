'strict'

import AppDispatcher from '../AppDispatcher.js'; //代码注册
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';
import CounterStore from '../stores/CounterStore.js';

const CHANGE_EVENT = 'changed';

function computeSummary(counterValues) {
    let summary = 0;
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key];
        }
    }
    return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary() {
        return computeSummary(CounterStore.getCounterValues());
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

SummaryStore.dispatcherToken = AppDispatcher.register((action) => {
    if ((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)) {
        AppDispatcher.waitFor([CounterStore.dispatcherToken]); //waitFor()是让改操作等待那些dispatchToken的回调函数执行结束后才能执行
        SummaryStore.emitChange();
    }
});

export default SummaryStore;