import React, { useEffect, useState } from 'react'

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);
    
    useEffect(()=> {
        getGifs();
    }, [])

    const getGifs = async()=> {

        const url = `https://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=Qy82VZZQ28YhxeBI89I5wozdXYk1WPvp`
        const response = await fetch(url);
        const {data} = await response.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        } )

        console.log(gifs)
        setImages( gifs )
        
    }

  return (
    <div>
        <h3>{ category }</h3>
        <ol>
            {images.map(({id, title}) => <li key={ id }> { title } </li>)}
        </ol>
    </div>
  )
}

export default GifGrid