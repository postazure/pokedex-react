import React from 'react'

export default class Types extends React.Component {
  render() {
    let types = this.props.types.map(function(type) {
      return(
        <a className="item">
          {type.name}
        </a>
      )
    });

    return (
      <div className="ui horizontal bulleted link list">
        {types}
      </div>
    )
  }
}
