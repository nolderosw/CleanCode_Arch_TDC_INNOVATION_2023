<template>
  <v-app>
    <Header />
    <v-container class="mt-16">
      <v-row>
        <v-col cols="12">
          <PokemonTable
            :pokemons="tablePokedex.pokemons"
            @details="showPokemonDetails"
            @remove="removePokemon"
          />
        </v-col>
      </v-row>
      <PokemonSelect
        :pokemon-select-list="selectPokedex.pokemons"
        @push="pushPokemon"
      />
    </v-container>
    <PokemonDialog
      :show="showDetailsDialog"
      :pokemon-details="pokemon"
      @hide="showDetailsDialog = false"
    />
  </v-app>
</template>

<script setup lang="ts"> 
import { onMounted, reactive, ref } from "vue";
import Header from "./components/AppHeader.vue";
import PokemonTable from "./components/PokemonTable.vue";
import PokemonDialog from "./components/PokemonDialog.vue";
import PokemonSelect from "./components/PokemonSelect.vue";
import { PokemonCompact, Pokemon } from "./types/Pokemon";
import Pokedex from "./entities/Pokedex";
import PokemonGatewayHttp from "./gateways/PokemonGatewayHttp";

const pokemon = ref<Pokemon>();
const showDetailsDialog = ref(false);
const tablePokedex = reactive(new Pokedex());
const selectPokedex = reactive(new Pokedex());
const pokemonsGateway = new PokemonGatewayHttp();

onMounted(async () => {
  const pokemons = await pokemonsGateway.getPokemons();
  selectPokedex.setPokemons(pokemons);
});
const pushPokemon = (pokemon: PokemonCompact) => {
  try {
    tablePokedex.pushPokemon(pokemon);
  } catch (error) {
    alert(error);
  }
}
const removePokemon = (pokemonToRemove: PokemonCompact) => {
  tablePokedex.removePokemon(pokemonToRemove);
};
const showPokemonDetails = async (pokemonUrl: string) => {
  pokemon.value = await pokemonsGateway.getPokemonByUrl(pokemonUrl)
  showDetailsDialog.value = true;
};
</script>
