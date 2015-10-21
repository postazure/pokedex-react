import React from 'react'
import Screen from './screen/screen.js'
import PokemonApiClient from '../pokemon-api-client.js'
import Search from './search/searchbox.js'

const defaultImage = 'https://d13pix9kaak6wt.cloudfront.net/avatar/whosthatpokemon_1349921927_96.png';

export default class Pokedex extends React.Component  {
  constructor(){
    super();
    this.pokemonApiClient = new PokemonApiClient;

    this.state = {
      activePokemon: {
        name: 'Please Search',
        types: [],
        moves: []
      },
      pokemonList: [],
      pokemonImage: defaultImage
    };

    this.setPokemon = this.setPokemon.bind(this);
    this.setPokemonList = this.setPokemonList.bind(this);
  }

  componentDidMount(){
    this.setState(
      {
        activePokemon: {},
        pokemonList: this.pokemonApiClient.getAllPokemon(this.setPokemonList)
      }
    );
  }

  setPokemon(pokemon) {
    let id = pokemon.pkdx_id;
    this.setState({
      activePokemon: pokemon,
      pokemonImage: `http://pokeapi.co/media/img/${id}.png`
    })
  }

  setPokemonList(pokemonList) {
    this.setState({pokemonList: pokemonList})
  }

  render() {
    return (
      <div className="ui fluid segment">
        <Search pokemonList={this.state.pokemonList} pokedex={this} />
        <Screen activePokemon={this.state.activePokemon} pokemonImage={this.state.pokemonImage}/>
      </div>
    )
  }
}
