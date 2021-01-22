import React from 'react'
import LinkForm from './LinkForm'
import {db}  from '../firebase'

const Links = () =>{

    const addOrEdit= async(linkObject)=>{
        await db.collection('docs').doc().set(linkObject);
        console.log("new task added");
    }


    return <div className="container">
        <LinkForm addOrEdit={addOrEdit}/>
        <h1>Enlaces</h1>
    </div>
}

export default Links;