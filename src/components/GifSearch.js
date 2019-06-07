import React from 'react';

export default class GifSearch extends React.Component {

  constructor(props) {
    super(props)
    this.state = { fieldVal: "" };
  }

  handleChange = (event) => {
    this.setState(
      { fieldVal: event.target.value  }
    )
  }

  render() {
    return (
    <form onSubmit={e => this.props.submitHandler(e,
    this.state.fieldVal.length>0 ? this.state.fieldVal : "dolphin"
    )} >
      <input onChange={this.handleChange} type={"text"} value={this.state.fieldVal} />
      <input type={"submit"} value={"Search"} />
    </form>
    );
  }
}
