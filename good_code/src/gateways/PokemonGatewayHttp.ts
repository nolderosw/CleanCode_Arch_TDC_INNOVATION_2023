import axios from "axios";
import { PokemonData } from "../types/Pokemon";

export default class PokemonGatewayHttp {
  private parsePokemonDetails(pokemonData: PokemonData) {
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      experience: pokemonData.base_experience,
      height: pokemonData.height,
      weight: pokemonData.weight,
      photo: pokemonData.sprites.front_default,
    };
  }

  async getPokemons() {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return data.results;
  }

  async getPokemonByUrl(pokemonUrl: string) {
    const { data } = await axios.get(pokemonUrl);
    const pokemonParsed = this.parsePokemonDetails(data);
    return pokemonParsed;
  }
}
