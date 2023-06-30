<template>
  <v-dialog v-model="showDetailsDialog" width="auto" persistent>
    <v-card>
      <v-card-text>
        <v-list lines="one">
          <v-list-item>
            <h3 class="text-center">
              {{ pokemonDetails?.name.toLocaleUpperCase() }}
            </h3>
          </v-list-item>
          <v-list-item>
            <v-img :src="pokemonDetails?.photo"></v-img>
          </v-list-item>
          <v-list-item>
            <strong>Id:</strong><span>{{ pokemonDetails?.id }}</span>
          </v-list-item>
          <v-list-item>
            <strong>Experiência:</strong
            ><span>{{ pokemonDetails?.experience }}</span>
          </v-list-item>
          <v-list-item>
            <strong>Altura:</strong><span>{{ pokemonDetails?.height }}</span>
          </v-list-item>
          <v-list-item>
            <strong>Largura:</strong><span>{{ pokemonDetails?.weight }}</span>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="hideDialog()"
          >Fechar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import { Pokemon } from "../../types/Pokemon.js";

const props = defineProps<{
  pokemonDetails?: Pokemon;
  show: boolean;
}>();

const showDetailsDialog = toRef(props, "show");

const emit = defineEmits(['hide']);

const hideDialog = () => {
    emit('hide');
}
</script>
