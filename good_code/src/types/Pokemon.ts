export type PokemonCompact = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: string;
  name: string;
  experience: string;
  height: string;
  weight: string;
  photo: string;
};

export type PokemonData = {
    id: string;
    name: string;
    base_experience: string;
    height: string;
    weight: string;
    sprites: {
        front_default: string;
    };
}

export type PokemonGame = {
  id: string,
  name: string,
}

export type PokemonLocation = {
  id: string,
  name: string,
}
