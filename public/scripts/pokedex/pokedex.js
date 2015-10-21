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
    this.setPokemonList = this.setPokemonList.bind(this);
  }

  componentDidMount(){
    this.setState(
      {
        activePokemon: this.pokemonApiClient.getPokemon(1, this.setPokemon),
        pokemonList: this.pokemonApiClient.getAllPokemon(this.setPokemonList)
      }
    );
  }

  setPokemon(pokemon) {
    this.setState({activePokemon: pokemon})
  }

  setPokemonList(pokemonList) {
    this.setState({pokemonList: pokemonList})
  }

  render() {
    return (
      <div>
        <h1>Hello Pokedex</h1>
        <Search pokemonList={this.state.pokemonList} pokedex={this} />
        <Screen activePokemon={this.state.activePokemon}/>
      </div>
    )
  }
}
