import { PokemonCompact } from "../types/Pokemon";

export default class Pokedex {
    pokemons: PokemonCompact[];
    constructor() {
        this.pokemons = [];
    }
    private getPokemonIndex (pokemonToFind: PokemonCompact) {
        return this.pokemons.findIndex(
          (pokemon) => pokemon.name === pokemonToFind.name
        );
    };
    private checkHasPokemon(pokemonToCheck?: PokemonCompact) {
        return (
            this.pokemons.findIndex(
              (pokemon) => pokemon.name === pokemonToCheck?.name
            ) !== -1
        );
    }
    setPokemons(pokemons: PokemonCompact[]) {
        this.pokemons = pokemons;
    }
    pushPokemon(pokemon: PokemonCompact) {
        if (this.checkHasPokemon(pokemon)) {
            throw(new Error('Pokemon ja existe na tabela'));
        } else {
            this.pokemons.push(pokemon);
        }
    }
    removePokemon(pokemon: PokemonCompact) {
        const pokemonIndex = this.getPokemonIndex(pokemon);
        this.pokemons.splice(pokemonIndex, 1);
    }
}