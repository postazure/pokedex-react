import React from 'react'
import Picture from './picture.js'
import Stats from './stats.js'

export default class Screen extends React.Component {
  render() {
    let pokemon = this.props.activePokemon;
    let pokemonImage = "http://vignette1.wikia.nocookie.net/pokemon/images/b/b8/001Bulbasaur_Dream.png/revision/latest?cb=20140903033758";

    return (
      <div className="ui centered card">
        <Picture image={pokemonImage}/>
        <div className="content">
          <a className="header">{pokemon.name}</a>
          <div className="meta">
            <span className="date">Joined in 2013</span>
          </div>
          <Stats pokemon={pokemon}/>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            22 Friends
          </a>
        </div>
      </div>
    )
  }
}
