import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

// const [images, setImages] = useState([]);
// useEffect(()=>{// lo que esta dentro solo se ejecuta una sola vez
//     getGifs(categoria)
//     .then(img => setImages(img));
// },[categoria]); //si la categoria cambia se vulve a ejecutar

const {data:images,loading}=useFetchGifs(categoria);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
            {
                    images.map(image =>{
                        return (<GifGridItem
                        key={image.id}
                        {...image}
                        />)
                    })
                }
            </div>
                
           
        </>
    )
}
