import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGif } from '../hooks/useFetchGif'

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGif(category);

    return (
        <>
            <h1>{category}</h1>
            {loading && <p>loading</p>}
            <div className="card-grid">
                {
                    data.map((img) => <GifGridItem key={img.id} {...img} />)
                }
            </div>
        </>
    )
}
