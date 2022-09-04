import React from 'react'

export const ProductEdit = ({ info, cancel, save }) => {
    //onchange solution
    const [title, setTitle] = React.useState(info.title);
    const [price, setPrice] = React.useState(info.price);

    const saveItem = () => {
        let item = {};
        if(info.editMode)
        {
            //update data
             item = {id:info.id, title, price, editMode:false};
        } else {
            //insert data
             item = {id:120, title, price, editMode:false};
             setTitle('');
             setPrice('');
        }

        save(item);
      
    }

    return (
        <div className="col-md-4 mt-3">
            <div className="card bg-info text-white">
                <div className="card-header">
                    {info.editMode ? "Edit Item" : "Add New Item"}
                </div>
                <div className="card-body">

                    <div className="mb-2">Title:
                        <input name="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    </div>
                    <div className="mb-2">Price :
                         <input name="price" onChange={(e) => setPrice(parseInt(e.target.value))} value={price}/>
                    </div>
                    
                    <button className="btn btn-success btn-sm mr-2" onClick={saveItem}>Save</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => cancel(info.id, false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
