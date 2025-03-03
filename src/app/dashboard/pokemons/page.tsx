import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: '151 Pokemons',
  description: 'Listado de 151 Pokemons',
 };

const getPokemos = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => {
    return {
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
    }
  });

  // throw new Error('Este es un error que no deberia de suceder');
  // throw notFound();

  return pokemons;
}


export default async function PokemonsPage() {

  const pokemons = await getPokemos(151);


  return (
    <div className="flex flex-col items-center justify-center p-3">

      <span className="flex flex-col items-center text-5xl text-white my-2">Listado de Pokémons <small className="text-gray-800">estático</small></span>

      <PokemonGrid pokemons={pokemons} />

    </div>
  );
}