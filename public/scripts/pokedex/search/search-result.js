import React from 'react'

export default class SearchResult extends React.Component {
  selectItem(id_url) {
    let id = this.getIDFromURL(id_url);
    let pokedex = this.props.pokedex;

    this.props.searchbox.clearForm();

    pokedex.setState(
      {activePokemon: pokedex.pokemonApiClient.getPokemon(id, pokedex.setPokemon)}
    );
  }

  getIDFromURL(url) {
    let id = url
              .replace('api/v1/pokemon/', '')
              .replace('/', '');
    return (id);
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
