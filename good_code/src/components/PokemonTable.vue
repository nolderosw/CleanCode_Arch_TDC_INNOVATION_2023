<template>
  <v-card class="mt-10">
    <v-table density="compact" fixed-header height="300px" class="my-10">
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-if="pokemons.length > 0"
          v-for="pokemon in pokemons"
          :key="pokemon.name"
        >
          <td>{{ pokemon.name }}</td>
          <td>
            <v-btn
              @click="showPokemonDetails(pokemon.url)"
              density="compact"
              icon="mdi-open-in-new"
              class="mr-2"
            ></v-btn>
            <v-btn
              @click="removePokemonFromTable(pokemon)"
              density="compact"
              icon="mdi-delete-outline"
              class="mr-2"
            ></v-btn>
          </td>
        </tr>
        <div v-else class="text-center mt-2">
          Adicione um pokemon para exibi-lo aqui
        </div>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
import { PokemonCompact } from '../types/Pokemon';


defineProps<{
  pokemons: PokemonCompact[],
}>();

const emit = defineEmits(['details', 'remove']);

const showPokemonDetails = (pokemonUrl: string) => {
  emit('details', pokemonUrl)
}

const removePokemonFromTable = (pokemonToRemove: PokemonCompact) => {
  emit('remove', pokemonToRemove)
}

</script>
