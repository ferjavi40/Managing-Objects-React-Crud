import React, {useState} from 'react'


const LinkForm = () => {

    const initialStateValues = {
        url: '',
        name:'',
        description:''
    }

    const [values, setValues]= useState (initialStateValues);

    const handleInputChanges = e =>{
        console.log(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(values)
    }
    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="far fa-plus-square fa-2x mr-n2"></i>
                </div>
                <input onChange={handleInputChanges} type="text" className="form-control" placeholder="https://someurl.com" name="url" />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="fas fa-pencil-alt fa-2x mr-n2"></i>
                </div>
                <input onChange={handleInputChanges} type="text" className="form-control" name="name" placeholder="website name" />
            </div>

            <div className="form-group">
                <textarea onChange={handleInputChanges} name="descripcion" rows="3" className="form-control" placeholder="Write a description"></textarea>
            </div>

            <button className="btn btn-primary">
                Save
            </button>

        </form>
    )
}


export default LinkForm;