import React, { Component } from 'react'

export default class CounterWithShouldComponetUpdate extends Component {
    componentDidMount() {
        console.log("CounterWithShouldComponetUpdate componentDidMount");
    }
    componentDidUpdate() {
        console.log("CounterWithShouldComponetUpdate componentDidUpdate");
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.counter == this.props.counter) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                CounterWithShouldComponetUpdate Counter : {this.props.counter}
            </div>
        )
    }
}
