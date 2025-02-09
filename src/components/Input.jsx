import { useState } from "react"
import '../input.css'


function Input({apiData,setApiData})
{
    let[title,setTitle]=useState('');
    let[body,setBody]=useState('');
    function updateApiData()
    {
        const newObj={
            id:new Date(),
            title:title,
            body:body
        };
        if(newObj.title.trim()!=='' &&newObj.body.trim()!=='')
        {
            setApiData((prev)=>([newObj,...prev]));
        }
        setTitle('');
        setBody('');
    }

    return(
        <div className="input-container">
            <input 
            className="input"
            name="text"
            type="text" 
            placeholder="Add Title"
            value={title}    
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input 
            className="input"
            name="text"
            type="text" 
            placeholder="Add Body"
            value={body}    
            onChange={(e)=>setBody(e.target.value)}
            />
            <button className="Addbtn" onClick={updateApiData}>ADD</button>
            <div className="dragdrp"><h3>Try new Drag and Drop Feature</h3></div>
        </div>
    )
}

export default Input;