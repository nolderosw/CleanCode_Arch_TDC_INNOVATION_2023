import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import AppHeader from "./AppHeader.vue";
import { createVuetify } from "vuetify";

describe("AppHeader", () => {
  const vuetify = createVuetify();
  const wrapper = mount(AppHeader, {
    global: {
      plugins: [vuetify],
    },
  });

  test("Should mount component", () => {
    expect(wrapper).toBeTruthy();
  });
});
