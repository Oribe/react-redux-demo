import React, {Component} from 'react';
import Counter from './Counter.js';

const style = {
    margin: '20px'
};

class ControlPanel extends Component {

    constructor(props) {
        super(props);

        this.initValue = [0, 10, 20]

        this.onCounterUpdate = this
            .onCounterUpdate
            .bind(this);

    }

    onCounterUpdate(newValue, previousValue) {
        // const
    }

    render() {
        return (
            <div>
                <Counter onUpdate={this.onCounterUpdate} caption='First'></Counter>
                <Counter
                    onUpdate={this.onCounterUpdate}
                    caption='Second'
                    initValue={this.initValue[1]}></Counter>
                <Counter
                    onUpdate={this.onCounterUpdate}
                    caption='Third'
                    initValue={this.initValue[2]}></Counter>
            </div>
        )
    }

}

export default ControlPanel;