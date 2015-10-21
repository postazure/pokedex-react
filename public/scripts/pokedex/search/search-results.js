import React from 'react'
import SearchResult from './search-result.js'

export default class SearchResults extends React.Component {
  render() {
    let resultsList;

    if (this.props.pokemonList === []) {
      resultsList = <div className="results transition hidden"></div>;
    } else {
      let results = this.props.pokemonList.map((pokemon) => {
        return (
          <SearchResult pokemon={pokemon} pokedex={this.props.pokedex}/>
        );
      });

      resultsList = (
        <div className="results transition visible">
          {results}
        </div>
      )
    }

    return (resultsList);
  }
}
