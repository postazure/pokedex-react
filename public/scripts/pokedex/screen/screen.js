import React from 'react'
import Picture from './picture.js'
import Stats from './stats.js'
import Types from './types/index.js'
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

  componentDidUpdate() {
    this.refs.typeIndex.setType(false);
  }

  render() {
    let pokemon = this.props.activePokemon || this.defaultPokemon;
    let pokemonImage = this.props.pokemonImage;
    let displayNumber = '';
    if (pokemon.pkdx_id) {displayNumber =`#${pokemon.pkdx_id}`};
    return (
      <div className="ui segment">
        <Picture image={pokemonImage}/>
        <h3 className="ui center aligned header">{displayNumber} {pokemon.name}</h3>
        <Types types={pokemon.types} ref="typeIndex"/>
        <div className="ui hidden divider"></div>
        <Stats pokemon={pokemon}/>
        <div className="ui hidden divider"></div>
        <Moves moves={pokemon.moves}/>
      </div>
    )
  }
}
