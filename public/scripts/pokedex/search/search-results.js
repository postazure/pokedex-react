import React from 'react'
import SearchResult from './search-result.js'

export default class SearchResults extends React.Component {
  render() {

    let results = this.props.pokemonList.map((pokemon) => {
      return (
        <SearchResult pokemon={pokemon} pokedex={this.props.pokedex}/>
      );
    });

    let classes;

    if (results[0] === undefined) {
      classes = 'results transition hidden'
    } else {
      classes = 'results transition visible'
    }

    return (
      <div className={classes}>
        {results}
      </div>
    )
  }
}
