import React from 'react'

export default class Picture extends React.Component {
  render() {
    return (
      <div className="image">
        <img src={this.props.image}/>
      </div>
    )
  }
}
