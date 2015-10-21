import React from 'react'
import SearchResults from './search-results'

export default class Searchbox extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchResultsList: []
    };
    this.setResultsList = this.setResultsList.bind(this);
  }

  setResultsList() {
    let query = React.findDOMNode(this.refs.searchInput).value.trim();

    if (query.length < 3) {return;}

    let matchedNames = [];

    this.props.pokemonList.forEach((pokemon) => {
      if (pokemon['name'].includes(query)) {
        matchedNames.push(pokemon)
      }
    });

    this.setState({searchResultsList: matchedNames})
  }


  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input onKeyUp={this.setResultsList} ref="searchInput" className="prompt" type="text" placeholder="Search Pokemon..."/>
          <i className="search icon"></i>
        </div>
        <SearchResults pokemonList={this.state.searchResultsList} pokedex={this.props.pokedex} />
      </div>
    )
  }
}
