import React, { useState } from 'react'
import { GifSearch } from './components/GifSearch';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])

    return (
        <div>
            <h2>Gif expert app</h2>
            <GifSearch setCategories={setCategories} />

            <ol>
                {
                    categories.map((category) => <GifGrid key={category} category={category} />)
                }
            </ol>
        </div>
    )
}