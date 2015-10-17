import React from 'react'

export default class Searchbox extends React.Component {
  componentDidMount() {
    let input = this.refs.searchInput;

    //input.search({source: this.props.pokemonList});
  }

  render() {
    return (
      <div className="ui search" ref="searchInput">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search Pokemon..."/>
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    )
  }
}
