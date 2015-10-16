import request from 'superagent'
export default class PokemonApiClient {
  constructor(){
    let host = 'http://pokeapi.co/api/v1/';
    this.allPokemonURI = `${host}pokedex/1`;
  }

  getAllPokemon() {
    request
      .get(this.allPokemonURI)
      .end(function(err, res){
        console.log(res.body.pokemon);
        console.error(err);
    })
  }
}
