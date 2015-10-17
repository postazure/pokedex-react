import React from 'react'

export default class Moves extends React.Component {
  render() {
    let moves = this.props.moves.map(function(move) {
      return(
        <a className="item">
          <i className="lightning icon"></i>
          <div className="content">
            {move.name}
          </div>
        </a>
      );
    });

    return (
      <div>
        <h3>Moves</h3>
        <div className="ui segment scrolling height150">
          <div className="ui list">
            {moves}
          </div>
        </div>
      </div>
    );
  }
}
