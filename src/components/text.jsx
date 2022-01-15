import React from 'react';
import {useState} from 'react';
function Text (){
    let textInput = React.createRef();
const [output, setOutput] = useState('hello');
function showInput(event){
setOutput(textInput.current.value)
}
    return(
        <>
    <div>
        <input type='text' onInput={showInput} ref={textInput} defaultValue='hi'/>
        <textarea>{output}</textarea>
    </div>

        </>
    )
}

export default Text;