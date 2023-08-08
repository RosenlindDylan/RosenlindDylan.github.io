'use client'

import React, { useState } from "react";


function Suggestion() {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        // this is where the db insert will occur, for now just print?
        console.log('You submitted: ' + value);
        event.preventDefault();
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    


    // the actual form
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
            Time (HH:MM)
            <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
export default Suggestion;