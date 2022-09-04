import React, { Component } from 'react'

export default class CustomerInfo extends Component {
    customer = {...this.props.customer};
    render() {
        return (
            <div className="col-md-4 mb-4">
                <div className="card bg-danger text-white">
                    <div className="card-body">
                        <h5>Full Name : {this.props.customer.fullName}</h5>
                        <h6>Grade : {this.customer.grade}</h6>
                        <button className="btn btn-secondary btn-sm" 
                        onClick={() => this.props.remove(this.customer.id)}>Remove</button>
                    </div>
                </div>
            </div>
        )
    }
}
