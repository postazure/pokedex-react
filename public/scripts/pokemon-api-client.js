import request from 'superagent'

export default class PokemonApiClient {
  constructor(){
    let host = 'http://pokeapi.co/api/v1/';
    this.allPokemonURI = `${host}pokedex/1`;
    this.pokemonURI = `${host}pokemon`;
    this.typeURI = `${host}type`;
  }

  getAllPokemon(state) {
    request
      .get(this.allPokemonURI)
      .end(function(err, res){
        let pokemon = res.body.pokemon;
        if (pokemon) {
          state(pokemon);
        }
        if (err) {console.error(err);}
    })
  }

  getPokemon(id, state) {
    let uri = this.pokemonURI;
    request
      .get(`${uri}/${id}`)
      .end(function(err, res) {
        let pokemon = res.body;
        if (pokemon) {
          state(pokemon);
        }
        if (err) {console.error(err);}
    });
  };

  getType(id, state) {
    let uri = this.typeURI;
    request
      .get(`${uri}/${id}`)
      .end((err, res) => {
        let type = res.body;
        if (type) {state(type)}
        if (err) {console.error(err)}
      }
    )
  }
}
