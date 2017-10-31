import React, {Component} from 'react';
import PropTypes from 'prop-types'

import * as Actions from '../Actions.js';
import CounterStore from '../stores/CounterStore.js';
const buttonStyle = {
    margin: '10px'
}

class Counter extends Component {

    constructor(props) {
        super(props);

        this.onChange = this
            .onChange
            .bind(this);

        this.onClickDecrementButton = this
            .onClickDecrementButton
            .bind(this);
        this.onClickIncrementButton = this
            .onClickIncrementButton
            .bind(this);

        // this.state = {     count: props.initValue }
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
    }

    // 页面装载完成
    componentDidMount() {
        CounterStore.addChangeListener(this.onChange)
    }

    // 页面卸载
    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange)
    }

    // 当页面数据发生变化时
    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount})
    }

    onClickDecrementButton() {
        // this.updataCount(false);
        Actions.decrement(this.props.caption);
    }

    onClickIncrementButton() {
        // this.updataCount(true)
        Actions.increment(this.props.caption);
    }

    // updataCount(isIncrement) {     const previousValue = this.state.count; const
    // newValue = isIncrement         ? previousValue + 1         : previousValue -
    // 1;     this.setState({count: newValue});     //将控件中的值传递给父级  this .props
    // .onUpdate(newValue, previousValue) }
    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption}
                    count: {this.state.count}</span>
                <button style={buttonStyle} onClick={this.onClickIncrementtButton}>+</button>
            </div>
        )
    }
}

Counter.PropTypes = {
    caption: PropTypes.string.isRequired //必传的string类型
}

// 定义传入值得类型 Counter.propTypes = {     caption: PropTypes.string.isRequired,
// initValue: PropTypes.number,     onUpdate: PropTypes.func }; 定义默认值
// Counter.defaultProps = {     initValue: 0,     onUpdate: f => f //什么都不做的函数 }
export default Counter;