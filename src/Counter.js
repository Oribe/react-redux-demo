import React, {Component} from 'react';
import PropTypes from 'prop-types'
const buttonStyle = {
    margin: '10px'
}

class Counter extends Component {

    constructor(props) {
        super(props);

        this.onClickDecrementButton = this
            .onClickDecrementButton
            .bind(this);
        this.onClickIncrementButton = this
            .onClickIncrementButton
            .bind(this);

        this.state = {
            count: props.initValue
        }
    }

    onClickDecrementButton() {
        this.updataCount(false);
    }

    onClickIncrementButton() {
        this.updataCount(true)
    }

    updataCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement
            ? previousValue + 1
            : previousValue - 1;

        this.setState({count: newValue});
        this
            .props
            .onUpdate(newValue, previousValue)
    }
    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption}
                    count: {this.state.count}</span>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
            </div>
        )
    }
}

// 定义传入值得类型
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};
// 定义默认值
Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f //什么都不做的函数
}
export default Counter;