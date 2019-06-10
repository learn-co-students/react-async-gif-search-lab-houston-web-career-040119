import React from 'react'

const GifSearch = (props) => {
    return(
        <form onSubmit={(e) => props.submitSearch(e)}>
            <lable>Enter a Search Term:</lable><br/>
            <input type='text'/>
            <input type='submit' value='Find Gifs'/>
        </form>
    )
}

export default GifSearch