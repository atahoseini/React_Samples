import React, { Component } from 'react'
import CustomerInfo from './CustomerInfo';

const initialCustomers = [
    {id:301, fullName:'Ali Rezaei', grade:'120'},
    {id:302, fullName:'Maryam Rezaei', grade:'110'},
    {id:303, fullName:'Hamid Amini', grade:'150'},
    {id:304, fullName:'Negar Mosavi', grade:'170'},
];

export default class CustomerList extends Component {
    state = {customers : initialCustomers};

    //Component Lifecycle

    //زمانی که کامپوننت ایجاد شد
    componentDidMount()
    {
        console.log('CustomerList componentDidMount');
    } 

    //زمانی که کامپوننت بروزرسانی شد
    componentDidUpdate(){
        console.log('CustomerList componentDidUpdate');
    }

    //زمانی که کامپوننت در حال از بین رفتن می باشد
    componentWillUnmount()
    {
        console.log('CustomerList componentWillUnmount');
    }

    removeCustomer = (id) => {
        this.setState({customers: this.state.customers.filter(q => q.id != id)});
    }

    //method overriding
    render() {
        return (
            <div className="container">
                <h2>Customer List with Class Component</h2>
                <div className="row">
                    {this.state.customers.map((item, index) => 
                    <CustomerInfo key={item.id} customer={item} remove={this.removeCustomer}/>)}
                </div>
            </div>
        )
    }
}
