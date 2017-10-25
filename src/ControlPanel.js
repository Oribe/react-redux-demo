import React, {Component} from 'react';
import Counter from './Counter.js';

const style = {
    margin: '20px'
};

class ControlPanel extends Component {

    constructor(props) {
        super(props);
        this.initValue = [0, 10, 20]
        const initSum = this
            .initValue
            .reduce((a, b) => a + b, 0);
        this.state = {
            sum: initSum
        }

        this.onCounterUpdate = this
            .onCounterUpdate
            .bind(this);

    };

    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({
            sum: this.state.sum + valueChange
        })
    };

    render() {
        return (
            <div style={style}>
                <Counter onUpdate={this.onCounterUpdate} caption='First'></Counter>
                <Counter
                    onUpdate={this.onCounterUpdate}
                    caption='Second'
                    initValue={this.initValue[1]}></Counter>
                <Counter
                    onUpdate={this.onCounterUpdate}
                    caption='Third'
                    initValue={this.initValue[2]}></Counter>
                <hr/>
                <div>Total Count: {this.state.sum}</div>
            </div>
        )
    }

}

export default ControlPanel;