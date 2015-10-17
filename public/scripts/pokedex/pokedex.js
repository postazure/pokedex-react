import React from 'react'
import Screen from './screen/screen.js'
import PokemonApiClient from '../pokemon-api-client.js'
import Search from './search/searchbox.js'

export default class Pokedex extends React.Component  {
  constructor(){
    super();
    this.pokemonApiClient = new PokemonApiClient;

    this.state = {
      activePokemon: {
        name: 'N/A',
        types: [],
        moves: []
      },
      pokemonList: []
    };

    this.setPokemon = this.setPokemon.bind(this);
  }

  componentDidMount(){
    this.setState(
      {
        activePokemon: this.pokemonApiClient.getPokemon('Bulbasaur', this.setPokemon),
        pokemonList: this.pokemonApiClient.getAllPokemon()
      }
    );
  }

  setPokemon(pokemon) {
    this.setState({activePokemon: pokemon})
  }

  render() {
    return (
      <div>
        <h1>Hello Pokedex</h1>
        <Search pokemonList={this.state.pokemonList}/>
        <Screen activePokemon={this.state.activePokemon}/>
      </div>
    )
  }
}
