import React, { useState } from 'react'


function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className='container'>
            <h4>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LOWERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="contaniner my-3">
            <h3>
                Your text summary
            </h3>
            <p>
                {text.split(" ").length} words and {text.length} charecters
            </p>
            <p>
                {0.008*text.split(" ").length} minutes read.
            </p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm;