import React from "react";

const Input = ({inputRef}) => {
    return(<>
    <input
        type="text"
        name="name"
        ref={inputRef}
    />
    </>)
};

export default Input;
