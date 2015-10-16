import React from 'react'
import Screen from './screen/screen.js'
import PokemonApiClient from '../pokemon-api-client.js'

export default class Pokedex extends React.Component  {
  constructor(){
    super();
    this.pokemonApiClient = new PokemonApiClient;

    this.state = {
      activePokemon: {
        name: 'N/A',
        types: [],
        moves: []
      }
    };

    this.setPokemon = this.setPokemon.bind(this);
  }

  componentDidMount(){
    this.setState(
      {
        activePokemon: this.pokemonApiClient.getPokemon('Bulbasaur', this.setPokemon)
      }
    );
  }

  setPokemon(pokemon) {
    console.log(this);
    this.setState({activePokemon: pokemon})
  }

  render() {
    return (
      <div>
        <h1>Hello Pokedex</h1>
        <Screen activePokemon={this.state.activePokemon}/>
      </div>
    )
  }
}
