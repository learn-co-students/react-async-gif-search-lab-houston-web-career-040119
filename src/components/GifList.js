import React from 'react'

const GifList = (props) => {
  return (
    <ul>
      {props.gifs.map((gif, idx) => 
          <li>
            <img key={idx} src={gif.images.original.url} />
          </li>
        )}
    </ul>
             
  )
}

export default GifList