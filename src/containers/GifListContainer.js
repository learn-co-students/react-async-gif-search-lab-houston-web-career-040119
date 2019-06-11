import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  constructor(){
    super()
    this.state = {
      gifs: [],
      searchTerm: 'dog'
    }
  }

  search = (e) => {
    e.preventDefault()
    this.setState({
      searchTerm: e.target[0].value
    })
  }

  fetchGifs = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(data => console.log(data) )
  }

  componentDidMount() {
    this.fetchGifs()
  }

  render() {
    return(
      <div>
        <GifSearch search={this.search}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}
