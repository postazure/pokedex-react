import React from 'react'
import SearchResult from './search-result.js'

export default class SearchResults extends React.Component {
  render() {

    let results = this.props.pokemonList.map((pokemon) => {
      return (
        <SearchResult searchbox={this.props.searchbox} pokemon={pokemon} pokedex={this.props.pokedex}/>
      );
    });

    let classes;

    if (results[0] === undefined) {
      classes = 'hidden'
    } else {
      classes = 'visible'
    }

    return (
      <div className={'scrolling height450 results transition ' + classes} >
        {results}
      </div>
    )
  }
}
