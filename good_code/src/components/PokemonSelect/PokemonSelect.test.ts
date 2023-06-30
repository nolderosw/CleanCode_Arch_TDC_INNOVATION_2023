import { PokemonCompact } from '../../types/Pokemon';
import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import PokemonSelect from "./PokemonSelect.vue";
import { createVuetify } from "vuetify";

const pokemons: PokemonCompact[] = [{name: 'test', url: 'test'}]

describe("PokemonSelect", () => {
  const vuetify = createVuetify();
  const wrapper = mount(PokemonSelect, {
    global: {
      plugins: [vuetify],
    },
    props: {
      pokemons: pokemons
    },
  });

  test("Should mount component", () => {
    expect(wrapper).toBeTruthy();
  });
});
