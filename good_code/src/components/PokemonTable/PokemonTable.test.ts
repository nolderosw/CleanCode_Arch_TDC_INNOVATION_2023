import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import PokemonTable from "./PokemonTable.vue";
import { createVuetify } from "vuetify";
import { PokemonCompact } from "../../types/Pokemon";

const pokemons: PokemonCompact[] = [{name: 'test', url: 'test'}]

describe("PokemonDialog", () => {
  const vuetify = createVuetify();
  const wrapper = mount(PokemonTable, {
    global: {
      plugins: [vuetify],
    },
    props: {
      pokemons: pokemons
    },
  });

  test("Should mount component with show true", () => {
    expect(wrapper).toBeTruthy();
  });

  test("Should mount component without pokemons", () => {
    wrapper.setProps({
      pokemons: []
    },);
    expect(wrapper).toBeTruthy();
  });

  test("Should emit details", () => {
    wrapper.vm.showPokemonDetails();
    expect(wrapper.emitted().details).toBeTruthy();
  });

  test("Should emit remove", () => {
    wrapper.vm.removePokemonFromTable();
    expect(wrapper.emitted().remove).toBeTruthy();
  });
});
