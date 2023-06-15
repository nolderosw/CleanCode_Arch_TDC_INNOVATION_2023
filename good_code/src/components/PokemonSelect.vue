<template>
  <v-row>
    <v-col cols="9">
      <v-select
        v-model="pokemonSelectModel"
        label="Pokémons"
        :items="pokemonSelectList"
        item-title="name"
        return-object
      ></v-select>
    </v-col>
    <v-col cols="3">
      <v-btn height="55px" block color="primary" @click="pushPokemon"
        >Adicionar Pokémon</v-btn
      >
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { PokemonCompact } from "../types/Pokemon";

defineProps<{
  pokemonSelectList: PokemonCompact[];
}>();

const pokemonSelectModel = ref<PokemonCompact>({ name: "", url: "" });

const emit = defineEmits(["push"]);

const pushPokemon = () => {
  emit("push", pokemonSelectModel.value);
};
</script>
