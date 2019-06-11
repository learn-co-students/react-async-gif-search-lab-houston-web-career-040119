import React from 'react'

const GifSearch = (props) => {
  return (
    <div>
      <form onSubmit={(e)=>props.search(e)}>
        <input type='text' name='search-bar' defaultValue='Search' />
        <input type='submit' value='Search' />
      </form>
    </div>
  )
}

export default GifSearch
