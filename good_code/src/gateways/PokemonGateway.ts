import { Pokemon, PokemonCompact } from './../types/Pokemon';

export default interface PokemonGateway {
    getPokemons(): Promise<PokemonCompact[]>;
    getPokemonByUrl(pokemonUrl: string): Promise<Pokemon>;
}