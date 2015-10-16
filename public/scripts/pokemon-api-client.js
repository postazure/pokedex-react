import request from 'superagent'
export default class PokemonApiClient {
  constructor(){
    let host = 'http://pokeapi.co/api/v1/';
    this.allPokemonURI = `${host}pokedex/1`;
    this.pokemonURI = `${host}pokemon`;
  }

  getAllPokemon() {
    request
      .get(this.allPokemonURI)
      .end(function(err, res){
        console.log(res.body.pokemon);
        console.error(err);
    })
  }

  getPokemon(name, state) {
    let id = 1;
    let uri = this.pokemonURI;

    request
      .get(`${uri}/${id}`)
      .end(function(err, res) {
        let pokemon = res.body;
        state(pokemon);
        console.error(err);
    });

    return(pokemon);
  };

  searchPokemon(name) {
    //TODO Remove hardcoded response with actual search method
    return 1;
  }
}
