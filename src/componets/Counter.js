import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {
    componentDidMount(){
        console.log("Counter componentDidMount");
    }
    componentDidUpdate(){
        console.log("Counter componentDidUpdate");
    }
    render() {
        return (
            <div>
                Counter : {this.props.counter}
            </div>
        )
    }
}
