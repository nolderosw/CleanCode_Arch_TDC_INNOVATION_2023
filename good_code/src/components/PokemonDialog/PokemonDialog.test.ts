import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import PokemonDialog from "./PokemonDialog.vue";
import { createVuetify } from "vuetify";
import { Pokemon } from "../../types/Pokemon";

const pokemon: Pokemon = {
  id: 'test',
  name: 'test',
  experience: 'test',
  height: 'test',
  weight: 'test',
  photo: 'test',
}

describe("PokemonDialog", () => {
  const vuetify = createVuetify();
  const wrapper = mount(PokemonDialog, {
    global: {
      plugins: [vuetify],
    },
    props: {
      pokemonDetails: pokemon,
      show: true,
    },
  });

  test("Should mount component with show true", () => {
    expect(wrapper).toBeTruthy();
  });
  test("Should mount component with show false", () => {
    wrapper.setProps({
      pokemonDetails: pokemon,
      show: true,
    });
    expect(wrapper).toBeTruthy();
  });
  test("Should emit hide", () => {
    wrapper.vm.hideDialog();
    expect(wrapper.emitted().hide).toBeTruthy();
  });
});
