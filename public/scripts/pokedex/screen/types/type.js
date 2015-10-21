import React from 'react'
import Efficacy from './efficacy.js'

export default class Types extends React.Component {
  render() {
    let type = this.props.type;

    return (
      <a className="item" onClick={this.props.onClick} >
        {type.name}
      </a>
    )
  }
}
