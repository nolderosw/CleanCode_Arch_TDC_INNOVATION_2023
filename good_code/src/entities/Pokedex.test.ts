import { PokemonCompact } from "../types/Pokemon";
import Pokedex from "./Pokedex";
import { describe, test, expect } from "vitest";

describe("Pokedex test", () => {
  const pokedex = new Pokedex();

  test("Should mount pokedex", () => {
    expect(pokedex).toBeTruthy();
  });

  test("Should set pokemons", () => {
    const pokemons: PokemonCompact[] = [{name: 'test', url: 'test'}];
    pokedex.setPokemons(pokemons);
    expect(pokedex.pokemons.length).toBe(1);
  });

  test("Should push pokemon", () => {
    const pokemon2: PokemonCompact = {name: 'pokemon2', url: 'pokemon2'};
    pokedex.pushPokemon(pokemon2);
    expect(pokedex.pokemons.length).toBe(2);
  });

  test("Should not push pokemon", () => {
    const pokemon: PokemonCompact = {name: 'pokemon2', url: 'pokemon2'};
    expect(() => pokedex.pushPokemon(pokemon)).toThrow(new Error('Pokemon ja existe na tabela'));
  });

  test("Should remove pokemon", () => {
    const pokemon2: PokemonCompact = {name: 'pokemon2', url: 'pokemon2'};
    pokedex.removePokemon(pokemon2);
    expect(pokedex.pokemons.length).toBe(1);
  });

});
