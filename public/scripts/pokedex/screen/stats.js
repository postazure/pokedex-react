import React from 'react'

export default class Screen extends React.Component {
  render() {
    let pokemon = this.props.pokemon;
    return (
      <div className="description">
        <table className="ui celled padded small table">
          <thead>
            <tr>
              <th>Attack</th>
              <th>Defense</th>
              <th>Health</th>
              <th>Speed</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{pokemon.attack}</td>
              <td>{pokemon.defense}</td>
              <td>{pokemon.hp}</td>
              <td>{pokemon.speed}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
