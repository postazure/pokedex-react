import React from 'react'
import Efficacy from './efficacy.js'
import Type from './type.js'
import Helpers from '../../helpers.js'
import PokemonApiClient from '../../pokemon-api-client.js'

export default class Types extends React.Component {
  constructor() {
    super();
    this.state = {
      typeActive: false,
      efficacyColor: '',
      types: []
    };

    this.apiClient = new PokemonApiClient;
    this.helpers = new Helpers;
  }

  handleClick(type, color, typeButton) {
    this.resetTypes(type);

    typeButton.setActive(true);
    let id = this.helpers.getIDfromResourceURI(type.resource_uri, 'type');
    this.apiClient.getType(id, this.setType.bind(this));
    this.setState({efficacyColor: color})
  }

  resetTypes(type) {
    let activeType = type.name;

    if (!this.state.typeActive) {
      this.setState({types: []})
      return;
    }
    
    this.state.types.splice(this.state.types.indexOf(activeType), 1);

    this.state.types.forEach((ref) => {
      this.refs[ref].setActive(false);
    });
  }

  setType(type) {
    this.setState({typeActive: type});
  }

  render() {
    let typesList = this.props.types || [];
    let types = typesList.map((type) => {
      let color = this.helpers.getColorFromType(type['name']);
      if (this.state.types.indexOf(type.name) === -1) {
        this.state.types.push(type.name)
      }
      return(
        <Type ref={type.name} type={type} activateEfficacyTable={this.handleClick.bind(this, type, color)}/>
      )
    });

    return (
      <div>
        {types}
        <div className="ui hidden divider"></div>
        {this.state.typeActive ? <Efficacy color={this.state.efficacyColor} type={this.state.typeActive}/> : ''}
      </div>
    )
  }
}

