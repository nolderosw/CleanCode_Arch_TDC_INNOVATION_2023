import { PokemonGame, PokemonLocation } from "../types/Pokemon";
import Pokedex from "./Pokedex";

export default class PremiumPokedex extends Pokedex {
    games: PokemonGame[];
    locations: PokemonLocation[];
    constructor () {
        super();
        this.games = [];
        this.locations = [];
    }

    getLocations() {
        return this.locations;
    }

    getGames() {
        return this.games;
    }

    setLocations(locations: PokemonLocation[]) {
        this.locations = locations;
    }

    setGames(games: PokemonGame[]) {
        this.games = games;
    }
}