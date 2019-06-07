import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = { data:[] }
  }

  submitHandler = (event,searchTerm) => {
    event.preventDefault();

    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=JNQAiA469ubQtzJYYpXUbISLM4yWpRKZ&rating=g`)
    .then( res => res.json() ) 
    .then(data =>
     { this.setState(
        {data: data.data.slice(0,3)}
      )
    }
    );


    event.target.reset();
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=dolphin&api_key=JNQAiA469ubQtzJYYpXUbISLM4yWpRKZ&rating=g`)
    .then( res => res.json() ) 
    .then(data =>
     { this.setState(
        {data: data.data.slice(0,3)}
      )
    }
    );
  }

  render() {
    return (
      <div>
        <GifSearch submitHandler={this.submitHandler} />
      <GifList data={this.state.data} />
      </div>
    );
  }
}
