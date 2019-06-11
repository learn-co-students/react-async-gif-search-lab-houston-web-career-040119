import React from 'react'

const GifList = (props) => {
  return (
    <div>
      <ul>
      {props.gifs.map(gif=>{return (
        <li>
          <img src={gif.images.original.url} alt='giffy' key={gif.images.original.url} />
        </li>
        )
      })}
      </ul>
    </div>
  )
}

export default GifList
