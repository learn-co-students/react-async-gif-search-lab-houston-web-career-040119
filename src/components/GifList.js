import React from 'react';

export default class GifList extends React.Component {
  render() {
    return (
    <div>
      <ul>
      {this.props.data.map( imgdat => (<li><img src={imgdat.images.original.url} /></li>) )} 
      </ul>
    </div>
    );
  }
}
