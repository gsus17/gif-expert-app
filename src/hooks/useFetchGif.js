import { useState, useEffect } from 'react'
import { getGif } from '../helpers/GetGif'

export const useFetchGif = (category) => {
    const [state, setState] = useState({ data: [], loading: true });

    useEffect(() => {
        getGif(category)
            .then((gifs) => setState({ loading: false, data: gifs }))

    }, [category])

    return state;
}
