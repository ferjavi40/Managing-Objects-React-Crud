import React, { useEffect, useState } from 'react'
import LinkForm from './LinkForm'
import { db } from '../firebase'
//notificaiones
import {toast}  from 'react-toastify'

const Links = () => {

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addOrEdit = async (linkObject) => {
        await db.collection('docs').doc().set(linkObject);
        toast("New data added", {
            type: "success",
        });
    };

    const onDeleteLink = async (id) => {
        if (window.confirm('Are you sure you want to delete this file?')) {
            await db.collection('docs').doc(id).delete();
            toast("data deleted", {
                type: "error", autoClose:2000
            });
        }

    }

    const getLinks = async () => {
        db.collection('docs').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {

                docs.push({ ...doc.data(), id: doc.id });
            })
            setLinks(docs);
        });

    }


    useEffect(() => {
        getLinks();
    }, []);

    return <div className="container text-center">
        <div className="col-md-10">
            <LinkForm {...{addOrEdit,currentId,links}} />
        </div>
        <div className="col-md-10 text-center">
            {links.map(link => (
                <div className="card mt-3 mb-1" key={link.id}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h4>{link.name}</h4>
                            <div>
                            <i onClick={() => onDeleteLink(link.id)} className="material-icons text-danger cursor mr-5">close</i>
                            <i onClick={()=>setCurrentId(link.id)} className="material-icons text-success cursor">create</i>
                            </div>

                        </div>
                        <p>{link.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Links;