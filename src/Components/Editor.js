import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'


const Editor = (props) => {
    const{
        language,
        displayName,
        value,
        onChange
    } =props
    const[open,setOpen]= useState();

    function handleChange(editor ,data, value){
        onChange(value);
    }

  return (
    <div className ={`editor-container ${open ? '' : 'collapsed'}`}>
        <div className ="editor-title">
            {displayName}
            <button 
            type ="button"
            className="expand-collapse-btn"
            onClick={()=> setOpen(prevOpen => !prevOpen)}>
                O/C
                </button>
             </div>
         <ControlledEditor
         onBeforeChange={handleChange}
         value ={value}
         className ="code-mirror-wrapper"
          options={{
            lineWrapping:true,
            lint:true,
            mode:language,
            theme:'material',
            lineNumbers:true
        }}
        />

   
    </div>
  )
}

export default Editor
