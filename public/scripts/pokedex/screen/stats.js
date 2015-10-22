import React from 'react'

export default class Stats extends React.Component {
  render() {
    let pokemon = this.props.pokemon;

    if (pokemon.attack === undefined) {return(<div></div>)}

    return (
      <div>
        <h3 className="ui center aligned header">Stats</h3>
        <table className="ui celled red unstackable table">
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
