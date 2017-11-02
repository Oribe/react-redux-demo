import React, { Component } from 'react';
import store from "../Store.js";
class Summary extends Component {

    constructor(props) {
        super(props)

        this.state = this.getOwnState();
    }

    getOwnState() {
        const state = store.getState();
        let sum = 0;
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }
        return { sum: sum }
    }
    render() {
        return (
            <div>Total Count: {this.state.sum}</div>
        )
    }
}

export default Summary;