import { PokemonGrid } from "@/pokemons";

export const metadata = {
  title: 'Favoritos',
  description: 'Velit nisi eu duis reprehenderit fugiat reprehenderit.',
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col items-center justify-center p-3">

      <span className="flex flex-col items-center text-5xl text-white my-2">Pokémons favoritos<small className="text-blue-400">Global State</small></span>

      <PokemonGrid pokemons={[]} />

    </div>
  );
}