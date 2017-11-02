'strict'
import * as ActionTypes from "./ActionTypes.js";


//定义构造函数
export const increment = (CounterCaption) => {
    return ({
        type: ActionTypes.INCREMENT,
        counterCaption: CounterCaption,
    })
}


export const decrement = (CounterCaption) => {
    return ({
        type: ActionTypes.DECREMENT,
        counterCaption: CounterCaption,
    })
}