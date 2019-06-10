import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs:[],
            search:''
        }
    }

    componentDidUpdate() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=ACTJG9qsNZ3QG1LBXHUx5qCMSgnjzT4a`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                gifs: data.data.slice(0,3)
            })
        })
    }

    submitSearch = (e) => {
        e.preventDefault()
        this.setState({
            search: e.target[0].value
        })
        e.target.reset()
    }


    render() {
        return(
            <div>
                <GifSearch submitSearch={this.submitSearch}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}