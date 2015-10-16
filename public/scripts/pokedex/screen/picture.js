import React from 'react'

export default class Screen extends React.Component {
  render() {
    return (
      <div className="image">
        <img src={this.props.image}/>
      </div>
    )
  }
}
