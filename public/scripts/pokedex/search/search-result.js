import React from 'react'
import Helpers from '../helpers.js'

export default class SearchResult extends React.Component {
  selectItem(id_url) {
    let helpers = new Helpers;

    let id = helpers.getIDfromResourceURI(id_url, 'pokemon');
    let pokedex = this.props.pokedex;

    this.props.searchbox.clearForm();

    pokedex.setState(
      {activePokemon: pokedex.pokemonApiClient.getPokemon(id, pokedex.setPokemon)}
    );
  }

  render() {
    let pokemon = this.props.pokemon;
    let id_url = pokemon.resource_uri;
    let name = pokemon['name'];

    return (
      <a className="result" onClick={this.selectItem.bind(this, id_url)}>
        <div className="content">
          <div className="title">{name}</div>
        </div>
      </a>
    )
  }
}
