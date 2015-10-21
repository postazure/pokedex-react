import React from 'react'
import Picture from './picture.js'
import Stats from './stats.js'
import Types from './types.js'
import Moves from './moves.js'

export default class Screen extends React.Component {
  constructor(){
    super();
    this.defaultPokemon = {
      name: 'N/A',
      types: [],
      moves: []
    }
  }

  render() {
    let pokemon = this.props.activePokemon || this.defaultPokemon;
    let pokemonImage = this.props.pokemonImage;

    return (
      <div className="ui card">
        <Picture image={pokemonImage}/>
        <div className="content">
          <a className="header">{pokemon.pkdx_id} {pokemon.name}</a>
          <Types types={pokemon.types}/>
          <Stats pokemon={pokemon}/>
        </div>
        <div className="extra content">
          <Moves moves={pokemon.moves}/>
        </div>
      </div>
    )
  }
}
