import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GifSearch = ({ setCategories }) => {
    const [textSearch, setTextSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (textSearch.trim().length > 0) {
            setCategories((categories) => [textSearch, ...categories]);
            setTextSearch('');
        }
    }

    const handleInputChange = (e) => {
        setTextSearch(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su texto del gif a buscar..." value={textSearch} onChange={(e) => handleInputChange(e)}></input>
        </form>
    )
}


GifSearch.propTypes = {
    setCategories: PropTypes.func.isRequired
}