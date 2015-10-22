import React from 'react'
import Efficacy from './efficacy.js'
import Helpers from '../../helpers.js'

export default class Types extends React.Component {
  constructor() {
    super();
    this.helpers = new Helpers;
    this.state = {
      color: '',
      isActive: false
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.setState({color: this.helpers.getColorFromType(this.props.type['name'])})
  }

  handleClick() {
    this.props.activateEfficacyTable(this);
  }

  setActive(toggle) {
    this.setState({ isActive: toggle })
  }

  render() {
    let type = this.props.type;
    let classes;
    if (this.state.isActive) {
      classes = 'ui ' + this.state.color + ' label';
    } else {
      classes = 'ui ' + this.state.color + ' basic label';
    }


    return (
      <a className={classes} onClick={this.handleClick}>{type.name}</a>
    )
  }
}


