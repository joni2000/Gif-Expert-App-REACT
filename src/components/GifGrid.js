import React, { useEffect } from 'react'

const GifGrid = ({category}) => {

    const getGifs = async()=> {

       /*  useEffect(()=> {
            getGifs();
        }, []) */

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

        getGifs()

        console.log(gifs)
        
    }

  return (
    <div>
        <h3>{ category }</h3>
    </div>
  )
}

export default GifGrid