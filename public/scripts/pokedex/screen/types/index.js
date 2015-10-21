import React from 'react'
import Efficacy from './efficacy.js'
import Type from './type.js'
import Helpers from '../../helpers.js'
import PokemonApiClient from '../../pokemon-api-client.js'

export default class Types extends React.Component {
  constructor() {
    super();
    this.state = {
      typeActive: false
    };

    this.apiClient = new PokemonApiClient;
  }

  handleClick(type) {
    let helpers = new Helpers;
    let id = helpers.getIDfromResourceURI(type.resource_uri, 'type');
    this.apiClient.getType(id, this.setType.bind(this));
  }

  setType(type) {
    this.setState({typeActive: type});
  }

  render() {
    let typesList = this.props.types || [];
    let types = typesList.map((type) => {
      return(
        <Type type={type} onClick={this.handleClick.bind(this, type)} />
      )
    });

    return (
      <div>
        <div className="ui horizontal bulleted link list">
          {types}
        </div>
        {this.state.typeActive ? <Efficacy type={this.state.typeActive}/> : ''}
      </div>
    )
  }
}
