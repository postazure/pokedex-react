import React from 'react'

export default class Moves extends React.Component {
  render() {
    let movesList = this.props.moves || [];
    if (movesList.length === 0) {return(<div></div>)}

    let moves = this.props.moves.map(function(move) {
      return(
        <div className="item">
          <i className="lightning icon"></i>
          <div className="content">
            {move.name}
          </div>
        </div>
      );
    });

    return (
      <div>
        <h3 className="ui center aligned header">Abilities</h3>
        <div className="ui segment scrolling height150">
          <div className="ui list">
            {moves}
          </div>
        </div>
      </div>
    );
  }
}
