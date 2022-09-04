import React, { useState, useEffect } from 'react'
import { ProductEdit } from './ProductEdit';
import { ProductInfo } from './ProductInfo';

//react hooks => useState,useEffect

//hardcode
const initalItems = [
{ id: 101, title: 'Monitor', price: 150, editMode:false },
{ id: 102, title: 'Mouse', price: 30, editMode:false },
{ id: 103, title: 'Keyboard', price: 40, editMode:false },];

const tempItem = {id: null, title: '', price: null, editMode:false};


export const ProductList = () => {

    const [items, setItems] = useState(initalItems);

    useEffect(() => {
        //این همان بخش ComponentWillUnMount می باشد
        return () => {
            console.log('ProductList willUnMount');
        }
    }, []);

    useEffect(() => {

        //DidMount => همیشه این بخش اجرا می شود
        console.log('ComponentDidMount');


        //DidUpdate به شرطی که
        //مقدار داخل input تغییر کند
        console.log('ComponentDidUpdate');

    }, [items]);

    const removeItem = (id) => {
        if (window.confirm('are you sure remove item ?')) {
            setItems([...items.filter(q => q.id != id)]);
        }
    }

    const addItem = (item) => {
        setItems([...items, item]);
    }

    const editItem = (item) => {
        let temp = [...items];
        const index = items.findIndex(q => q.id == item.id);
        temp[index] = item;
        setItems([...temp]);
        console.log(temp)
    }

    const setEditMode = (id, mode = true) => {
        if(id==null)
            return;
        let temp = [...items];
        const index = items.findIndex(q => q.id == id);
        temp[index].editMode = mode;
        setItems([... temp]);
    }


    const setEmpty = (id, mode = true) => {
        let temp = [...items];
        const index = items.findIndex(q => q.id == id);
        temp[index].editMode = mode;
        setItems([... temp]);
    }

    return (
        <div className="container">
            <h2>Product List with Function Component</h2>
            <div className="row">
                {items.map((item, index) => 
                    item.editMode ?  
                    <ProductEdit key={item.id} info={item} save={editItem}  cancel={setEditMode} />
                  : <ProductInfo key={item.id} info={item} remove={removeItem} edit={setEditMode} />)}

                <ProductEdit info={tempItem} save={addItem}  cancel={setEditMode} />
            </div>
        </div>
    )
}
