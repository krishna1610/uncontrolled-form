import React, { useRef } from "react";
import Input from './Input';

const Form = () => {
   const inputRef = useRef(null);

    function handleSubmit() {
        alert(`Name: ${inputRef.current.value}`);
    }

    return (
        <div className="App">
            <h3>Uncontrolled Form</h3>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <Input inputRef={inputRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
