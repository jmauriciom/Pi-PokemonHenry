
import React, { useState } from "react";




export default function SearchBar({onSearch}) {
    async function onSearch(name) {
        try {
            const response = await fetch(`http://localhost:3001/pokemon?name=${name}`);
            const data = await response.json();

        } catch (error) {
            console.log(error);
        }
    }










    const [id, setId] = useState('');

    function handleChange(e) {
        setId(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault();
        onSearch(id);
        setId('');
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    }


    return (
        <div>
            <input type='search' value={id} onChange={handleChange} onKeyDown={handleKeyDown} />
            <button onClick={handleSearch}>Search Pokemon</button>
        </div>
    )
}