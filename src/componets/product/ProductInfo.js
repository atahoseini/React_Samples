import React from 'react'

export const ProductInfo = ({ info, remove, edit }) => {
    return (
        <div className="col-md-4 mt-3">
            <div className="card bg-primary text-white">
            <div className="card-header">
                   Item Info
                </div>
                <div className="card-body">
                    <h3>Title:{info.title}</h3>
                    <h4>Price : {info.price}</h4>
                    <button className="btn btn-warning btn-sm mr-2" onClick={() => edit(info.id)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => remove(info.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}
