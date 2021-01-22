import React from 'react'


const LinkForm = () =>{
    return (
        <form className="card card-body">
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i class="far fa-plus-square fa-2x mr-n2"></i>
                </div>
                <input type="text" className="form-control" placeholder="https://someurl.com" name="url"/>
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i class="fas fa-pencil-alt fa-2x mr-n2"></i>
                </div>
                <input type="text" className="form-control" name="name" placeholder="website name"/>
            </div>

            <div className="form-group">
                <textarea name="descripcion"  rows="3" className="form-control" placeholder="Write a description"></textarea>
            </div>

        </form>
    )
}


export default LinkForm;