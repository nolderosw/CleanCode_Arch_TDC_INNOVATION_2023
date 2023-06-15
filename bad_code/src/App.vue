<template>
    <v-app>
        <v-app-bar color="#1c1c1c">
          <template v-slot:prepend>
            <v-img src="src/assets/TDC_LOGO.png" height="60" width="90" />
            <span class="text-white">Pokédex - TDC Innovation 2023</span>
          </template>
        </v-app-bar>
        <v-container class="mt-16">
          <v-row>
            <v-col cols="12">
              <v-card class="mt-10">
                <v-table
                  density="compact"
                  fixed-header
                  height="300px"
                  class="my-10"
                >
                  <thead>
                    <tr>
                      <th class="text-left">Nome</th>
                      <th class="text-left">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-if="List1.length > 0"
                      v-for="i in List1"
                      :key="i.name"
                    >
                      <td>{{ i.name }}</td>
                      <td>
                        <v-btn
                          @click="shw(i.url)"
                          density="compact"
                          icon="mdi-open-in-new"
                          class="mr-2"
                        ></v-btn>
                        <v-btn
                          @click="remove(i)"
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
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-select
                v-model="current"
                label="Pokémons"
                :items="List2"
                item-title="name"
                return-object
              ></v-select>
            </v-col>
            <v-col cols="3">
              <v-btn height="55px" block color="primary" @click="add"
                >Adicionar Pokémon</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
        <v-dialog v-model="show" width="auto">
          <v-card>
            <v-card-text>
              <v-list lines="one">
                <v-list-item>
                  <h3 class="text-center">
                    {{ current2?.name.toLocaleUpperCase() }}
                  </h3>
                </v-list-item>
                <v-list-item>
                  <v-img :src="current2?.photo"></v-img>
                </v-list-item>
                <v-list-item>
                  <strong>Id:</strong><span>{{ current2?.id }}</span>
                </v-list-item>
                <v-list-item>
                  <strong>Experiência:</strong><span>{{ current2?.xp }}</span>
                </v-list-item>
                <v-list-item>
                  <strong>Altura:</strong><span>{{ current2?.height }}</span>
                </v-list-item>
                <v-list-item>
                  <strong>Largura:</strong><span>{{ current2?.weight }}</span>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="show = false">Fechar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-app>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";

type type1 = {
  name: string;
  url: string;
};

type type2 = {
  id: string;
  name: string;
  xp: string;
  height: string;
  weight: string;
  photo: string;
};

const List1 = ref<type1[]>([]);
const List2 = ref<type1[]>([]);
const current = ref<type1>();
const current2 = ref<type2>();
const show = ref(false);

const add = () => {
  if (!current.value || !current.value.name) {
    alert('Escolha um pokemon para adicionar na tabela')
  } 
  else if(
    List1.value.findIndex(
      el => el.name === current.value?.name
    ) === -1){
    List1.value.push(
      current.value
    );
  } else {
    alert('Pokemon ja existe na tabela')
  }
};

const remove = (i: type1) => {
  const index = List1.value.findIndex((el) => el.name === i.name);
  List1.value.splice(index, 1);
};

const shw = async (u: string) => {
  const { data } = await axios.get(u);
  const tmp = {
    id: data.id,
    name: data.name,
    xp: data.base_experience,
    height: data.height,
    weight: data.weight,
    photo: data.sprites.front_default,
  };
  current2.value = tmp;
  show.value = true;
};

onMounted(async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
  List2.value = data.results;
});
</script>
