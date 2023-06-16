<template>
  <v-row>
    <v-col cols="9">
      <v-select
        v-model="pokemonSelectModel"
        label="Pokémons"
        :items="pokemons"
        item-title="name"
        return-object
      ></v-select>
    </v-col>
    <v-col cols="3">
      <slot name="right" :currentPokemon="pokemonSelectModel"></slot>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { PokemonCompact } from "../types/Pokemon";

defineProps<{
  pokemons: PokemonCompact[];
}>();

const pokemonSelectModel = ref<PokemonCompact>({ name: "", url: "" });

</script>
