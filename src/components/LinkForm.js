import React, { useState, useEffect } from 'react'
import { db } from '../firebase';




const LinkForm = (props) => {

    const initialStateValues = {
        type: "",
        name: "",
        description: "",
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChanges = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })

    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        props.addOrEdit(values);
        setValues({ ...initialStateValues });
    };

    const getLinkById = async (id) => {
        const doc = await db.collection('docs').doc(id).get();
        setValues({ ...doc.data() })
    }

    useEffect(() => {
        console.log(props.currentId);
        if (props.currentId === "") {
            setValues({ ...initialStateValues });
        } else {
            getLinkById(props.currentId);
        }
    }, [props.currentId]);

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="far fa-plus-square fa-2x mr-n2"></i>
                </div>
                <input onChange={handleInputChanges}
                    value={values.type}
                    type="text"
                    className="form-control"
                    placeholder="Number"
                    name="type" />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="fas fa-pencil-alt fa-2x mr-n2"></i>
                </div>
                <input onChange={handleInputChanges}
                    value={values.name}
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name" />
            </div>

            <div className="form-group">
                <textarea onChange={handleInputChanges}
                    value={values.description}
                    name="description"
                    rows="3"
                    className="form-control"
                    placeholder="Write a description"></textarea>
            </div>

            <button className="btn btn-primary">
                {props.currentId=== ''? 'Save' : 'Update'}
            </button>

        </form>
    )
}


export default LinkForm;