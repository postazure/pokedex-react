import React from 'react'
import SearchResults from './search-results'

export default class Searchbox extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchResultsList: []
    };
    this.setResultsList = this.setResultsList.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  setResultsList() {
    let query = React.findDOMNode(this.refs.searchInput).value.trim();

    if (query.length < 1) {return;}

    let matchedNames = [];

    this.props.pokemonList.forEach((pokemon) => {
      if (pokemon['name'].includes(query)) {
        matchedNames.push(pokemon)
      }
    });

    this.setState({searchResultsList: matchedNames})
  }

  clearForm() {
    this.refs.searchInput.value = '';
    this.state.searchResultsList = [];
  }


  render() {
    return (
      <div className="ui fluid search">
        <div className="ui fluid icon input">
          <input onKeyUp={this.setResultsList} ref="searchInput" type="text" placeholder="Search Pokemon..."/>
          <i className="search icon"></i>
        </div>
        <SearchResults pokemonList={this.state.searchResultsList} searchbox={this} pokedex={this.props.pokedex} />
      </div>
    )
  }
}
