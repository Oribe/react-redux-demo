import React, { Component } from 'react';
import PropTypes from 'prop-types'
import store from "../Store.js";
import * as Actions from "../Actions.js";
const buttonStyle = {
    margin: '10px'
}

class Counter extends Component {

    constructor(props) {
        super(props);

        this.onDecrement = this.onDecrement.bind(this);
        this.onIncrement = this.onIncrement.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        }
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componnetWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    OnIncrement() {
        store.dispatch(Actions.increment(this.props.caption))
    }

    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption))
    }


    render() {
        // es6解构赋值
        const { caption } = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onDecrement}> - </button>
                <span> {caption}  count: {this.state.count} </span>
                <button style={buttonStyle} onClick={this.OnIncrement} > + </button>
            </div>
        )
    }
}

// 定义传入值得类型
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
};
export default Counter;